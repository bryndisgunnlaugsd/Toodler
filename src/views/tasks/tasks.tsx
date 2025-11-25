import { TaskList } from "@/src/components/task-list/task-list";
import styles from "./styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { List } from "@/src/types/list"
import data from "../../data/data.json"

export function Tasks() {
    const router = useRouter();
    const { listId } = useLocalSearchParams();

    const currentList: List | undefined = data.lists.find(
        (list) => list.id === Number(listId)
    );

    return(

        <View style={styles.container}>
            <Text style={styles.title}>
                {currentList?.name}
            </Text>
            <TouchableOpacity
                onPress={() =>
                    router.push({
                    pathname: "/create-task",
                    params: { listId: listId?.toString() },
                    })
                }
                >
          <Text style={styles.addButton}>＋</Text>
        </TouchableOpacity>
            <TaskList/>
        </View>
    )
}