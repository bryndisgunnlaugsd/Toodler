import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import { UseTaskStore } from "@/src/storage/task-storage";

type CreateTaskCompProps = {
  listId?: number;
};

export function CreateTaskComp({ listId }: CreateTaskCompProps) {
  const router = useRouter();
  const { addTask } = UseTaskStore();

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");

  const handleCreate = () => {
    const trimmed = name.trim();
    if (!trimmed || !listId) return; // need a list to attach to

    addTask(listId, trimmed, description);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Task</Text>

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
          onPress={handleCreate}
        >
          <Text style={styles.buttonTextDark}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
