import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { List } from "@/src/types/list";

type MoveTaskListPickerProps = {
  lists: List[];
  selectedListId: number;
  onSelect: (listId: number) => void;
};

export function MoveTaskListPicker({
  lists,
  selectedListId,
  onSelect,
}: MoveTaskListPickerProps) {
  const [open, setOpen] = useState(false);

  const selected =
    lists.find((l) => l.id === selectedListId) ?? lists[0] ?? undefined;

  return (
    <View style={styles.formBlock}>
      <Text style={styles.label}>Move to list</Text>

      {/* “input” pill */}
      <TouchableOpacity
        style={styles.listPickerButton}
        onPress={() => setOpen((prev) => !prev)}
      >
        <Text style={styles.listPickerButtonText}>
          {selected ? selected.name : "Choose list"}
        </Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.listPicker}>
          <View style={styles.listPickerList}>
            {lists.map((l) => (
              <TouchableOpacity
                key={l.id}
                style={styles.listPickerItem}
                onPress={() => {
                  onSelect(l.id);
                  setOpen(false);
                }}
              >
                <Text
                  style={[
                    styles.listPickerItemText,
                    l.id === selectedListId &&
                      styles.listPickerItemTextActive,
                  ]}
                >
                  {l.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
