import data from "@/src/data/data.json";
import { FlatList, View, Text, Pressable } from "react-native";
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

  const RenderItem = ({ item }: { item: Task }) => {
    const HandleToggle = (newValue: boolean) => {
      ToggleTask(item.id, newValue);
    };

    return (
      <View style={styles.row}>
        <Checkbox
          value={item.isFinished}
          onValueChange={HandleToggle}
        />

        <Pressable
          style={styles.textPressable}
          onPress={() => HandleToggle(!item.isFinished)}
        >
          <Text
            style={[
              styles.taskTitle,
              item.isFinished && styles.taskTitleDone,
            ]}
          >
            {item.name}
          </Text>

          {item.description ? (
            <Text style={styles.taskDescription}>{item.description}</Text>
          ) : null}
        </Pressable>
      </View>
    );
  };
    return(

        <View style={styles.container}>
            <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={RenderItem}
            ListEmptyComponent={
            <Text>There is no task for this list... create one!</Text>}
            />
        </View>
    );
}