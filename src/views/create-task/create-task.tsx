// src/app/create-task.tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { UseTaskStore } from "@/src/storage/task-storage";
import { UseListStore } from "@/src/storage/list-storage";
import { List } from "@/src/types/list";

export function CreateTask() {
  const router = useRouter();
  const { listId, taskId } = useLocalSearchParams();
  const { tasks, addTask, updateTask } = UseTaskStore();
  const { lists } = UseListStore();

  const editing = !!taskId;

  const existingTask = editing
    ? tasks.find((t) => t.id === Number(taskId))
    : undefined;

  // text fields
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");

  // list selection (for moving tasks)
  const [selectedListId, setSelectedListId] = useState<number | null>(null);
  const [listPickerOpen, setListPickerOpen] = useState(false);

  // determine current list + board lists
  const numericListId =
    selectedListId ??
    (existingTask?.listId ?? (listId ? Number(listId) : NaN));

  const currentList: List | undefined = lists.find(
    (l) => l.id === (existingTask?.listId ?? (listId ? Number(listId) : -1))
  );

  const boardLists: List[] = currentList
    ? lists.filter((l) => l.boardId === currentList.boardId)
    : [];

  useEffect(() => {
    if (editing && existingTask) {
      setName(existingTask.name);
      setDesc(existingTask.description);
      setSelectedListId(existingTask.listId);
    } else if (listId) {
      setSelectedListId(Number(listId));
    }
  }, [editing, existingTask?.id, listId]);

  const handleSave = () => {
    const trimmed = name.trim();
    if (!trimmed) return;

    const finalListId =
      selectedListId ??
      existingTask?.listId ??
      (listId ? Number(listId) : undefined);

    if (!finalListId) return;

    if (editing && taskId) {
      updateTask(Number(taskId), {
        name: trimmed,
        description,
        listId: finalListId,     // 👈 move between lists
      });
    } else {
      addTask(finalListId, trimmed, description);
    }

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {editing ? "Edit Task" : "Create Task"}
      </Text>

      {/* Task name */}
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

      {/* Task description */}
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

      {/* Move to list – only show in edit mode when we know the board */}
      {editing && currentList && (
        <View style={styles.formBlock}>
          <Text style={styles.label}>Move to list</Text>

          <TouchableOpacity
            style={styles.input}
            onPress={() => setListPickerOpen((prev) => !prev)}
          >
            <Text>
              {
                boardLists.find((l) => l.id === selectedListId)?.name ??
                currentList.name
              }
            </Text>
          </TouchableOpacity>

          {listPickerOpen && (
            <View style={styles.listPicker}>
              {boardLists.map((l) => (
                <TouchableOpacity
                  key={l.id}
                  style={styles.listPickerItem}
                  onPress={() => {
                    setSelectedListId(l.id);
                    setListPickerOpen(false);
                  }}
                >
                  <Text
                    style={[
                      styles.listPickerItemText,
                      l.id === selectedListId && styles.listPickerItemTextActive,
                    ]}
                  >
                    {l.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      )}

      {/* Buttons */}
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
