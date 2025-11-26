import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import { Task } from "@/src/types/task";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTaskStore } from "@/src/storage/task-storage";
import { TaskItem } from "./task-item";
import { Swipeable } from "react-native-gesture-handler";
import { Audio } from "expo-av";

export function TaskList() {
  const router = useRouter();
  const { listId } = useLocalSearchParams();
  const { tasks, updateTask, deleteTask } = useTaskStore();

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [completeSound, setCompleteSound] = useState<Audio.Sound | null>(null);

  const numericListId = Number(listId);

  const filteredTasks = tasks.filter(
    (task) => task.listId === numericListId
  );

  useEffect(() => {
    let mounted = true;

    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/sounds/pencil_check_mark_2-105940.mp3") 
      );
      if (mounted) setCompleteSound(sound);
    }

    loadSound();

    return () => {
      mounted = false;
      if (completeSound) {
        completeSound.unloadAsync();
      }
    };
  }, []);

  const toggleTaskDone = async (task: Task) => {
    const newValue = !task.isFinished;
    updateTask(task.id, { isFinished: newValue });

    if (newValue && completeSound) {
      try {
        // replay from start each time
        await completeSound.replayAsync();
      } catch (e) {
        console.warn("Could not play complete sound", e);
      }
    }
  };

  const handleEdit = (task: Task) => {
    router.push({
      pathname: "/create-task",
      params: {
        listId: task.listId.toString(),
        taskId: task.id.toString(),
      },
    });
    setOpenMenuId(null);
  };

  const handleDelete = (id: number) => {
    deleteTask(id);
    setOpenMenuId(null);
  };

  const renderRightActions = (id: number) => (
      <View style={styles.swipeDelete}>
        <Text style={styles.swipeDeleteText}>Delete</Text>
      </View>

  );

  const renderItem = ({ item }: { item: Task }) => {
    const isMenuOpen = openMenuId === item.id;

    return (
      <Swipeable
          renderRightActions={() => renderRightActions(item.id)}
          overshootRight={true}
          rightThreshold={60} // how far to swipe before it counts
          onSwipeableOpen={(direction) => {
            // swipe LEFT -> opens RIGHT actions -> direction === "right"
            if (direction === "right") {
              handleDelete(item.id);
            }
          }}
      >
      <TaskItem
        task={item}
        isMenuOpen={isMenuOpen}
        onToggleDone={() => toggleTaskDone(item)}
        onToggleMenu={() =>
          setOpenMenuId((prev) => (prev === item.id ? null : item.id))
        }
        onEdit={() => handleEdit(item)}
        onDelete={() => handleDelete(item.id)}
      />
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTasks}
        extraData={{ tasks, openMenuId }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text>There is no task for this list... create one!</Text>
        }
      />
    </View>
  );
}
