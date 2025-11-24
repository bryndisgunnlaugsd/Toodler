import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import data from "../../data/data.json";
import { ListList } from "@/src/components/list-lists/list-lists";

export function Lists() {
    const router = useRouter();
    const boardId = useLocalSearchParams();

    const filteredLists = data.lists.filter(
        list => list.boardId === Number(boardId)
    );

    return(
        
        <View style={styles.container}>
            {/*/ Render Lists */}
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
            <ListList/>

        </View>
    )
}