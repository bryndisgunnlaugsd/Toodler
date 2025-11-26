import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "@/src/views/createboard/styles";
import { useBoardStore } from "@/src/storage/board-storage";

import { CameraComponent } from "@/src/components/image/camera";
import { useImagePicker } from "@/src/components/image/imagepicker";
import { PhotoPreview } from "@/src/components/image/photopreview";

type EditBoardCompProps = {
  boardId: number;
};

export function EditBoardComp({ boardId }: EditBoardCompProps) {
  const router = useRouter();
  const { boards, updateBoard } = useBoardStore();

  const existing = boards.find((b) => b.id === boardId);

  const { pickImage } = useImagePicker((p) => p && setPhoto(p));


  const [name, setName] = useState(existing?.name ?? "");
  const [description, setDesc] = useState(existing?.description ?? "");
  const [photo, setPhoto] = useState<{ uri: string } | null>(
    existing?.thumbnailPhoto ? { uri: existing.thumbnailPhoto } : null
  );
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    if (existing) {
      setName(existing.name);
      setDesc(existing.description);
      if (existing.thumbnailPhoto) {
        setPhoto({ uri: existing.thumbnailPhoto });
      }
    }
  }, [existing]);

  const handleSave = () => {
    const trimmed = name.trim();
    if (!trimmed) return;

    updateBoard(boardId, {
      name: trimmed,
      description,
      thumbnailPhoto: photo?.uri,
    });

    router.push("/boards");
  };

  if (!existing) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Board not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Board</Text>

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
        <Text style={styles.label}>Thumbnail</Text>
      </View>

      {!showCamera && (
        <TouchableOpacity onPress={() => setShowCamera(true)}>
          <Text style={styles.cameraIcon}>📷 Change Photo</Text>
        </TouchableOpacity>
      )}

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
          onPress={handleSave}
        >
          <Text style={styles.buttonTextDark}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
