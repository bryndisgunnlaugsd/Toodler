import { useBoardStore } from "@/src/storage/board-storage";
import styles from "@/src/views/createboard/styles";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { CameraComponent } from "@/src/components/image/camera";
import { useImagePicker } from "@/src/components/image/imagepicker";
import { PhotoPreview } from "@/src/components/image/photopreview";

export function CreateBoardComp() {
  const router = useRouter();
  const { addBoard } = useBoardStore();

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [photo, setPhoto] = useState<{ uri: string } | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const { pickImage } = useImagePicker((p) => p && setPhoto(p));

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
        <TouchableOpacity style={styles.iconLayout} onPress={() => setShowCamera(true)}>
          <Text style={styles.cameraIcon}>📷</Text>
          <Text style={styles.input}>Add Photo</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.iconLayout} onPress={pickImage}>
        <Text style={styles.photoLibrary}>🖼️</Text>
        <Text style={styles.input}>Choose from Library</Text>
      </TouchableOpacity>

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
