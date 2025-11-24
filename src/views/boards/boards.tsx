import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { BoardList } from "@/src/components/board-lists/board-lists";

export function Boards() {
    const router = useRouter();
    return(
        
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => router.push("/lists")}
                style={styles.button}
                accessibilityLabel="Go to Lists"
                accessibilityRole="button">
                    <Text style={styles.buttonText}>
                        This button goes to lists
                    </Text>
            </TouchableOpacity>
            <BoardList />
        </View>
    )
}