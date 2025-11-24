import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function Boards() {
    const router = useRouter();
    return(
        
        <View style={styles.container}>
            <Text>
                Here you should see your boards and implement all board functionality
            </Text>
            <TouchableOpacity
                onPress={() => router.push("/lists")}
                style={styles.button}
                accessibilityLabel="Go to Lists"
                accessibilityRole="button">
                    <Text style={styles.buttonText}>
                        This button goes to lists
                    </Text>
            </TouchableOpacity>

        </View>
    )
}