import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function Tasks() {
    const router = useRouter();
    return(
        
        <View style={styles.container}>
            <Text>
                Here you should see your tasks for boards and implement all task functionality
            </Text>

        </View>
    )
}