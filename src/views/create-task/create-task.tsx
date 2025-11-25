import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";



export function CreateTask() {

    const router = useRouter();
    const {listId} = useLocalSearchParams();

    
}