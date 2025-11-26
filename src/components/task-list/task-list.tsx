import { FlatList, View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "../task-list/styles";
import { Task } from "@/src/types/task";
import { useLocalSearchParams, useRouter } from "expo-router";
import Checkbox from "expo-checkbox";
import { useTaskStore } from "@/src/storage/task-storage";
import React, { useState } from "react";

export function TaskList() {
  const router = useRouter();
  const { listId } = useLocalSearchParams();
  const { tasks, updateTask, deleteTask } = useTaskStore();

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const numericListId = Number(listId);

  const filteredTasks = tasks.filter(
    (task) => task.listId === numericListId
  );

  const toggleTask = (taskId: number, currentValue: boolean) => {
    updateTask(taskId, { isFinished: !currentValue });
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
    const handleToggle = () => toggleTask(item.id, item.isFinished);
    const isMenuOpen = openMenuId === item.id;

    return (
      <View
        style={[
          styles.row,
          isMenuOpen && styles.taskRowActive, // optional raised style
        ]}
      >
        {/* checkbox + text */}
        <Checkbox
          value={item.isFinished}
          onValueChange={handleToggle}
        />

        <Pressable
          style={styles.textPressable}
          onPress={handleToggle}
        >
          <Text
            style={[
              styles.taskTitle,
              item.isFinished && styles.taskTitleDone,
            ]}
          >
            {item.name}
          </Text>

          {item.description ? (
            <Text style={styles.taskDescription}>{item.description}</Text>
          ) : null}
        </Pressable>

        {/* 3-dots task menu */}
        <View style={styles.taskMenuWrapper}>
          <TouchableOpacity
            style={styles.taskMenuButton}
            onPress={() =>
              setOpenMenuId((prev) => (prev === item.id ? null : item.id))
            }
          >
            <Text style={styles.taskMenuIcon}>⋮</Text>
          </TouchableOpacity>

          {isMenuOpen && (
            <View style={styles.taskMenu}>
              <TouchableOpacity onPress={() => handleEdit(item)}>
                <Text style={styles.taskMenuItem}>Edit task</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Text style={styles.taskMenuItemDelete}>Delete task</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTasks}
        extraData={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text>There is no task for this list... create one!</Text>
        }
      />
    </View>
  );
}
