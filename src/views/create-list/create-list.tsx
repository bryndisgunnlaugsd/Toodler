import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useListStore } from "@/src/storage/list-storage";

//Color options
const COLORS = [
  "#FBD2D7",
  "#F8D9B6",
  "#EAF5B0",
  "#CFF3FF",
  "#D8D4FF",
  "#F5D8FF",
];

export function CreateList() {

  const router = useRouter();
  const { boardId } = useLocalSearchParams();

  const [name, setName] = useState("");
  const [color, setColor] = useState(COLORS[0]);

  const { addList } = useListStore();

  const handleCreate = () => {
    if (!name.trim() || !boardId) return;

    addList(Number(boardId), name.trim(), color);

    router.back();
  };

  return (

    //
    <View style={styles.container}>
        <Text style={styles.title}>Create List</Text>

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
          {COLORS.map((c) => {
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
          onPress={handleCreate}
        >
          <Text style={styles.buttonTextDark}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}