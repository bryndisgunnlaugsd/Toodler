import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import type { CameraViewRef } from "expo-camera";
import styles from "../../views/createboard/styles";

interface PhotoResult {
  uri: string;
  width: number;
  height: number;
}

interface CameraComponentProps {
  onPictureTaken: (photo: PhotoResult) => void;
  onClose: () => void;
}

export function CameraComponent({ onPictureTaken, onClose }: CameraComponentProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) return <Text>Loading...</Text>;

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
      if (photo) onPictureTaken(photo);
    }
  };

  return (
    <View style={styles.cameraContainer}>
      <CameraView ref={cameraRef} facing="back" style={styles.camera} />

      <TouchableOpacity style={styles.closeCamera} onPress={onClose}>
        <Text style={{ fontSize: 28, color: "white" }}>✖</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.shutterButton} onPress={takePicture}>
        <Text style={{ fontSize: 30 }}>📸</Text>
      </TouchableOpacity>
    </View>
  );
}
