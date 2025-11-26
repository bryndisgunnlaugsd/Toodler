import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useTaskStore } from "@/src/storage/task-storage";

export function CreateTask() {
  const router = useRouter();
  const { listId, taskId } = useLocalSearchParams();
  const { tasks, addTask, updateTask } = useTaskStore();

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");

  const editing = !!taskId;
  const existingTask = editing
    ? tasks.find((t) => t.id === Number(taskId))
    : undefined;

  useEffect(() => {
    if (editing && existingTask) {
      setName(existingTask.name);
      setDesc(existingTask.description);
    } else {
      setName("");
      setDesc("");
    }
  }, [editing, existingTask?.id]);

  const handleSave = () => {
    const trimmed = name.trim();
    if (!trimmed) return;

    if (editing && taskId) {
      updateTask(Number(taskId), { name: trimmed, description });
    } else if (listId) {
      addTask(Number(listId), trimmed, description);
    }

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {editing ? "Edit Task" : "Create Task"}
      </Text>

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
          <Text style={styles.buttonTextDark}>
            {editing ? "Save" : "Create"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
