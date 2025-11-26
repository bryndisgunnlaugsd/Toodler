import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";
import styles from "../../views/createboard/styles";

interface PhotoResult {
  uri: string;
  width: number;
  height: number;
}

interface ImagePickerButtonProps {
  onPicked: (photo: PhotoResult | null) => void;
}

export function useImagePicker(onPicked: (photo: PhotoResult | null) => void) {
  const [permission, setPermission] =
    useState<null | ImagePicker.PermissionResponse>(null);

  const requestPermission = async () => {
    const res = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setPermission(res);
    return res;
  };

  const pickImage = async () => {
    let perm = permission ?? (await ImagePicker.getMediaLibraryPermissionsAsync());
    setPermission(perm);

    if (!perm.granted) return false;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (result.canceled) return null;

    const asset = result.assets[0];
    onPicked({
      uri: asset.uri,
      width: asset.width,
      height: asset.height,
    });

    return true;
  };

  return { permission, requestPermission, pickImage };
}

