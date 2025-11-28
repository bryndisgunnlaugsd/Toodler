import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import { Task } from "@/src/types/task";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTaskStore } from "@/src/storage/task-storage";
import { TaskItem } from "./task-item";
import { Swipeable } from "react-native-gesture-handler";

export function TaskList() {
  const router = useRouter();
  const { listId } = useLocalSearchParams();
  const { tasks, updateTask, deleteTask } = useTaskStore();

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const numericListId = Number(listId);

  const filteredTasks = tasks.filter(
    (task) => task.listId === numericListId
  );

  const toggleTaskDone = (task: Task) => {
    updateTask(task.id, { isFinished: !task.isFinished });
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
