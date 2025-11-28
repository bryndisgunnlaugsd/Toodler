import { useBoardStore } from "@/src/storage/board-storage";
import styles from "@/src/views/createboard/styles";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { CameraComponent } from "@/src/components/image/camera";
import { PhotoPreview } from "@/src/components/image/photopreview";
import { useImagePicker } from "../image/imagepicker";

type EditBoardCompProps = {
  boardId: number;
};

export function EditBoardComp({ boardId }: EditBoardCompProps) {
  const router = useRouter();
  const { boards, updateBoard } = useBoardStore();

  const existing = boards.find((b) => b.id === boardId);


  const [name, setName] = useState(existing?.name ?? "");
  const [description, setDesc] = useState(existing?.description ?? "");
  const [photo, setPhoto] = useState<{ uri: string } | null>(
    existing?.thumbnailPhoto ? { uri: existing.thumbnailPhoto } : null
  );
  const [showCamera, setShowCamera] = useState(false);

  const { pickImage } = useImagePicker((p) => p && setPhoto(p));

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
        <TouchableOpacity style={styles.iconLayout} onPress={() => setShowCamera(true)}>
          <Text style={styles.cameraIcon}>📷</Text>
          <Text style={styles.input}>Change Photo</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.iconLayout} onPress={pickImage}>
        <Text style={styles.photoLibrary}>🖼️</Text>
        <Text style={styles.input}>Change Photo from Library</Text>
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
          onPress={handleSave}
        >
          <Text style={styles.buttonTextDark}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
