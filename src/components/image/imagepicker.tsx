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

export function ImagePickerButton({ onPicked }: ImagePickerButtonProps) {
  const [permission, setPermission] =
    useState<null | ImagePicker.PermissionResponse>(null);

  const requestPermission = async () => {
    const res = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setPermission(res);

    return res;
  };

  const handlePress = async () => {
    let perm = permission ?? (await ImagePicker.getMediaLibraryPermissionsAsync());
    setPermission(perm);

    if (!perm.granted) {
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

  if (permission && !permission.granted) {
    return (
      <View>
        <Text style={{ marginBottom: 10 }}>Photo access required</Text>

        {permission.canAskAgain ? (
          <TouchableOpacity onPress={requestPermission}>
            <Text style={{ color: "blue" }}>Grant Permission</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => Linking.openSettings()}>
            <Text style={{ color: "blue" }}>Open Settings</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.photoLibrary}>🖼️ Choose from library</Text>
    </TouchableOpacity>
  );
}
