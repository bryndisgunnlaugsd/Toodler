import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import { Task } from "@/src/types/task";
import { useLocalSearchParams, useRouter } from "expo-router";
import { UseTaskStore } from "@/src/storage/task-storage";
import { TaskItem } from "./task-item"; 

export function TaskList() {
  const router = useRouter();
  const { listId } = useLocalSearchParams();
  const { tasks, updateTask, deleteTask } = UseTaskStore();

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

  const renderItem = ({ item }: { item: Task }) => {
    const isMenuOpen = openMenuId === item.id;

    return (
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
