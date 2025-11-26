//COMPONENT FOR CREATING A NEW LIST
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import styles from "@/src/views/create-list/styles"; // reuse old existing styles
import { useListStore } from "@/src/storage/list-storage";

// color options
const colors = [
  "#FBD2D7",
  "#F8D9B6",
  "#EAF5B0",
  "#CFF3FF",
  "#D8D4FF",
  "#F5D8FF",
];

//SETJA Í TYPES?? (SVO STUTT)
type CreateListCompProps = {
  boardId?: number;
};

export function CreateListComp({ boardId }: CreateListCompProps) {
    const router = useRouter();
    const { addList } = useListStore();

    const [name, setName] = useState("");
    const [color, setColor] = useState(colors[0]);

    const handleCreate = () => {
        if (!name.trim() || boardId == null) return;

        addList(boardId, name.trim(), color);
        router.back();
    };

    return (
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
          onPress={handleCreate}
        >
          <Text style={styles.buttonTextDark}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>

    );


}