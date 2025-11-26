import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./styles";
import { Task } from "@/src/types/task";

type TaskItemProps = {
  task: Task;
  isMenuOpen: boolean;
  onToggleDone: () => void;
  onToggleMenu: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export function TaskItem({
  task,
  isMenuOpen,
  onToggleDone,
  onToggleMenu,
  onEdit,
  onDelete,
}: TaskItemProps) {
  return (
    <View
      style={[
        styles.row,
        isMenuOpen && styles.taskRowActive, // optional raised look
      ]}
    >
      {/* Checkbox + text */}
      <Checkbox value={task.isFinished} onValueChange={onToggleDone} />

      <Pressable style={styles.textPressable} onPress={onToggleDone}>
        <Text
          style={[
            styles.taskTitle,
            task.isFinished && styles.taskTitleDone,
          ]}
        >
          {task.name}
        </Text>

        {task.description ? (
          <Text style={styles.taskDescription}>{task.description}</Text>
        ) : null}
      </Pressable>

      {/* 3-dots menu */}
      <View style={styles.taskMenuWrapper}>
        <TouchableOpacity
          style={styles.taskMenuButton}
          onPress={onToggleMenu}
        >
          <Text style={styles.taskMenuIcon}>⋮</Text>
        </TouchableOpacity>

        {isMenuOpen && (
          <View style={styles.taskMenu}>
            <TouchableOpacity onPress={onEdit}>
              <Text style={styles.taskMenuItem}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onDelete}>
              <Text style={styles.taskMenuItemDelete}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
