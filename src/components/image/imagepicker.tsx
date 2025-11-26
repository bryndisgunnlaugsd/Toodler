import React from "react";
import { TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "../../views/createboard/styles";

interface PhotoResult {
  uri: string;
  width: number;
  height: number;
}

interface ImagePickerButtonProps {
  onPicked: (photo: PhotoResult | null) => void;
}

export function ImagePickerButton({ onPicked }: ImagePickerButtonProps) {
  const pickImage = async () => {
    const { status, canAskAgain } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted" && canAskAgain) {
      alert("We need access to your photo library.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (result.canceled) return;

    const asset = result.assets[0];

    onPicked({
      uri: asset.uri,
      width: asset.width,
      height: asset.height,
    });
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Text style={styles.photoLibrary}>🖼️ Choose from library</Text>
    </TouchableOpacity>
  );
}
