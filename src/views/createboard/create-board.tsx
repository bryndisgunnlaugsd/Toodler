import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { CameraView, useCameraPermissions } from "expo-camera";
import type { CameraViewRef } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { Linking } from "react-native";
import { ScrollView } from "react-native";
import { useBoardStore } from "@/src/storage/board-storage";

interface PhotoResult {
  uri: string;
  width: number;
  height: number;
}

interface CameraComponentProps {
  onPictureTaken: (photo: PhotoResult) => void;
  onClose: () => void;
}


const CameraComponent = ({ onPictureTaken, onClose }: CameraComponentProps) => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = React.useRef<any>(null);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

    if (!permission) {
    return <Text>Loading...</Text>;
    }

    if (!permission.granted) {
    return (
        <View>
        <Text>Camera permission required</Text>
        <TouchableOpacity onPress={requestPermission}>
            <Text>Grant Permission</Text>
        </TouchableOpacity>
        </View>
    );
    }

    const takePicture = async () => {
    if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        if (photo) {
        onPictureTaken(photo);
        }
    }
    };

  return (
    <View style={styles.cameraContainer}>
      <CameraView
        ref={cameraRef}
        facing="back"
        style={styles.camera}
      />

      {/* CLOSE CAMERA */}
      <TouchableOpacity style={styles.closeCamera} onPress={onClose}>
        <Text style={{ fontSize: 28, color: "white" }}>✖</Text>
      </TouchableOpacity>

      {/* TAKE PHOTO */}
      <TouchableOpacity style={styles.shutterButton} onPress={takePicture}>
        <Text style={{ fontSize: 30 }}>📸</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraComponent;


export function CreateBoard() {

  const router = useRouter();

  const {boardId} = useLocalSearchParams();
  const {boards, addBoard, updateBoard } = useBoardStore();

  const editing = !!boardId;

  const existingBoard = editing
  ? boards.find((b) => b.id === Number(boardId))
  : undefined;

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [photo, setPhoto] = useState<PhotoResult | null>(null);


  useEffect(() => {
  if (editing && existingBoard) {
    setName(existingBoard.name);
    setDesc(existingBoard.description);
    setPhoto(
      existingBoard.thumbnailPhoto
        ? { uri: existingBoard.thumbnailPhoto, width: 0, height: 0 }
        : null
    );
  }
  }, [editing, existingBoard]);


  const pickImage = async () => {
    const { status, canAskAgain  } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted" && canAskAgain) {
    // NOTE: On iOS this still WON’T show the popup again unless the OS allows it
    alert("We need access to your photo library to continue.");
    return;
  }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (result.canceled) return;

    const selected = result.assets[0];

    setPhoto({
      uri: selected.uri,
      width: selected.width,
      height: selected.height,
    });

    console.log("Chosen Photo:", selected.uri);
  };

  const handleCreate = () => {
  const trimmedName = name.trim();
  if (!trimmedName) return;

  if (editing && boardId) {
    // EDIT MODE
    updateBoard(Number(boardId), {
      name: trimmedName,
      description,
      thumbnailPhoto: photo?.uri,
    });
  } else {
    // CREATE MODE
    addBoard(trimmedName, description, photo?.uri ?? "");
  }

  router.back();
};
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Board</Text>

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

      <View style={styles.section}>
        <Text style={styles.label}>Board Thumbnail</Text>
      </View>

      {/* CAMERA AND LIBRARY BUTTONS*/}
      {!showCamera && (
        <TouchableOpacity onPress={() => setShowCamera(true)}>
          <Text style={styles.cameraIcon}>📷 Add Photo</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={pickImage}>
            <Text style={styles.photoLibrary}>🖼️ Choose from library</Text>
    </TouchableOpacity>

      {/* CAMERA VIEW */}
      {showCamera && (
        <CameraComponent
          onPictureTaken={(p) => {
            setPhoto(p);
            setShowCamera(false);
          }}
          onClose={() => setShowCamera(false)}
        />
      )}

      {/* PHOTO PREVIEW */}
      {photo && (
        <View style={styles.photoPreviewContainer}>
          <Text style={styles.label}>Selected Photo:</Text>
          <Image source={{ uri: photo.uri }} style={styles.photoPreview} />
        </View>
      )}

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
          <Text style={styles.buttonTextDark}>{editing ? "Save" : "Create"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
