import { TaskList } from "@/src/components/task-list/task-list";
import styles from "./styles";
import { useRoute } from '@react-navigation/native';
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { List } from "@/src/types/list"
import data from "../../data/data.json"

export function Tasks() {
    const router = useRoute();
    const { listId } = useLocalSearchParams();

    const currentList: List | undefined = data.lists.find(
        (list) => list.id === Number(listId)
    );

    return(

        <View style={styles.container}>
            <Text style={styles.title}>
                {currentList?.name}
            </Text>

            <TaskList/>
        </View>
    )
}