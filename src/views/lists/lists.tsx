import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function Lists() {
    const router = useRouter();
    return(
        
        <View style={styles.container}>
            <Text>
                Here you should see your lists for boards and implement all list functionality
            </Text>
            <TouchableOpacity
                onPress={() => router.push("/tasks")}
                style={styles.button}
                accessibilityLabel="Go to Tasks"
                accessibilityRole="button">
                    <Text style={styles.buttonText}>
                        This button goes to tasks
                    </Text>
            </TouchableOpacity>

        </View>
    )
}