import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../views/createboard/styles";

interface PhotoPreviewProps {
  uri: string;
}

export function PhotoPreview({ uri }: PhotoPreviewProps) {
  return (
    <View style={styles.photoPreviewContainer}>
      <Text style={styles.label}>Selected Photo:</Text>
      <Image source={{ uri }} style={styles.photoPreview} />
    </View>
  );
}
