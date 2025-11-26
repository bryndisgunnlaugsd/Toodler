import { useListStore } from "@/src/storage/list-storage";
import styles from "@/src/views/create-list/styles";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const colors = [
  "#FBD2D7",
  "#F8D9B6",
  "#EAF5B0",
  "#CFF3FF",
  "#D8D4FF",
  "#F5D8FF",
];

type EditListCompProps = {
  listId: number;
};

export function EditListComp({ listId }: EditListCompProps) {
  const router = useRouter();
  const { lists, updateList} = useListStore();

  const existingList = lists.find((l) => l.id === listId);

  const [name, setName] = useState(existingList?.name ?? "");
  const [color, setColor] = useState<string>(
    existingList?.color ?? colors[0]
  );

  // sync if list loads later
  useEffect(() => {
    if (existingList) {
      setName(existingList.name);
      setColor(existingList.color);
    }
  }, [existingList]);

  const handleSave = () => {
    const trimmed = name.trim();
    if (!trimmed) return;

    updateList(listId, { name: trimmed, color });
    router.back();
  };

  if (!existingList) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>List not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit List</Text>

      <View style={styles.section}>
        <Text style={styles.label}>List Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter list name"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>List Color</Text>
        <View style={styles.colorsRow}>
          {colors.map((c) => {
            const selected = c === color;
            return (
              <TouchableOpacity
                key={c}
                onPress={() => setColor(c)}

                style={[
                  styles.colorSwatch,
                  { backgroundColor: c },
                  selected && styles.colorSwatchSelected,
                ]}
              >
                {selected && <Text style={styles.check}>✓</Text>}
              </TouchableOpacity>
            );
          })}
        </View>
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
          <Text style={styles.buttonTextDark}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
