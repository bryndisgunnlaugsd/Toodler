import data from "@/src/data/data.json";
import { FlatList, View, Text } from "react-native";
import styles from "../task-list/styles";
import { Task } from "@/src/types/task";
import { useRoute } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import Checkbox from "expo-checkbox"


export function TaskList() {
    const router = useRoute();
    const { listId } = useLocalSearchParams();

    const filteredTasks = data.tasks.filter(
        task => task.listId === Number(listId)
    );

    const [tasks, setTasks] = useState<Task[]>(filteredTasks)

    const ToggleTask = (taskId: number, newValue: boolean) => {
        setTasks((prev) =>
            prev.map((task) =>
            task.id === taskId
                ?{ ...task, isFinished: !task.isFinished}
                : task
            )
        );
    };

    const RenderItem = ({ item }: { item: Task }) => (
        <View style={styles.row}>
            <Checkbox
            value={item.isFinished}
            onValueChange={(newValue: boolean) =>
            ToggleTask(item.id, newValue)
            }
            />

            <View style={styles.textContainer}>
                <Text
                    style={[
                        styles.taskTitle,
                        item.isFinished && styles.taskTitleDone,
                    ]}
                >
                    {item.name}
                </Text>

                {item.description ? (
                    <Text style={styles.taskDescription}>
                        {item.description}
                    </Text>
                ) : null}
            </View>
        </View>
    );

    return(

        <View style={styles.container}>
            <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={RenderItem}
            />
        </View>
    );
}