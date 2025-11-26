import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "@/src/views/createboard/styles";
import { useBoardStore } from "@/src/storage/board-storage";

import { CameraComponent } from "@/src/components/image/camera";
import { ImagePickerButton } from "@/src/components/image/imagepicker";
import { PhotoPreview } from "@/src/components/image/photopreview";

export function CreateBoardComp() {
  const router = useRouter();
  const { addBoard } = useBoardStore();

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [photo, setPhoto] = useState<{ uri: string } | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleCreate = () => {
    const trimmed = name.trim();
    if (!trimmed) return;

    addBoard(trimmed, description, photo?.uri ?? "");
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Board</Text>

      {/* NAME */}
      <View style={styles.section}>
        <Text style={styles.label}>Board Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter board name"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      {/* DESCRIPTION */}
      <View style={styles.section}>
        <Text style={styles.label}>Board Description</Text>
        <TextInput
          value={description}
          onChangeText={setDesc}
          placeholder="Enter board description"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      {/* THUMBNAIL */}
      <View style={styles.section}>
        <Text style={styles.label}>Board Thumbnail</Text>
      </View>

      {!showCamera && (
        <TouchableOpacity onPress={() => setShowCamera(true)}>
          <Text style={styles.cameraIcon}>📷 Add Photo</Text>
        </TouchableOpacity>
      )}

      <ImagePickerButton onPicked={(p) => p && setPhoto(p)} />

      {showCamera && (
        <CameraComponent
          onPictureTaken={(p) => {
            setPhoto(p);
            setShowCamera(false);
          }}
          onClose={() => setShowCamera(false)}
        />
      )}

      {photo && <PhotoPreview uri={photo.uri} />}

      {/* BUTTONS */}
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
    </ScrollView>
  );
}
