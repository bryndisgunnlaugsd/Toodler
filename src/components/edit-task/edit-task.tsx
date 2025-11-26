import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import { UseTaskStore } from "@/src/storage/task-storage";
import { UseListStore } from "@/src/storage/list-storage";
import { List } from "@/src/types/list";
import { MoveTaskListPicker } from "./MoveTaskListPicker";

type EditTaskCompProps = {
  taskId: number;
};

export function EditTaskComp({ taskId }: EditTaskCompProps) {
  const router = useRouter();
  const { tasks, updateTask } = UseTaskStore();
  const { lists } = UseListStore();

  const task = tasks.find((t) => t.id === taskId);

  const [name, setName] = useState(task?.name ?? "");
  const [description, setDesc] = useState(task?.description ?? "");
  const [selectedListId, setSelectedListId] = useState<number | undefined>(
    task?.listId
  );

  // find current list and sibling lists on same board
  const currentList: List | undefined = task
    ? lists.find((l) => l.id === task.listId)
    : undefined;

  const boardLists: List[] = currentList
    ? lists.filter((l) => l.boardId === currentList.boardId)
    : [];

  useEffect(() => {
    if (task) {
      setName(task.name);
      setDesc(task.description);
      setSelectedListId(task.listId);
    }
  }, [taskId, task?.name, task?.description, task?.listId]);

  const handleSave = () => {
    const trimmed = name.trim();
    if (!task || !trimmed || selectedListId == null) return;

    updateTask(taskId, {
      name: trimmed,
      description,
      listId: selectedListId,
    });

    router.back();
  };

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Task not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Task</Text>

      <View style={styles.formBlock}>
        <Text style={styles.label}>Task Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter task name"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      <View style={styles.formBlock}>
        <Text style={styles.label}>Task Description</Text>
        <TextInput
          value={description}
          onChangeText={setDesc}
          placeholder="Enter task description"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      {boardLists.length > 0 && selectedListId != null && (
        <MoveTaskListPicker
          lists={boardLists}
          selectedListId={selectedListId}
          onSelect={setSelectedListId}
        />
      )}

      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={[styles.button, styles.buttonLight]}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonTextDark}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonGrey]}
          onPress={handleSave}
        >
          <Text style={styles.buttonTextDark}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
