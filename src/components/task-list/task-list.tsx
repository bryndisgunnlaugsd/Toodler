import { FlatList, View, Text, Pressable } from "react-native";
import styles from "../task-list/styles";
import { Task } from "@/src/types/task";
import { useLocalSearchParams } from "expo-router";
import Checkbox from "expo-checkbox";
import { useTaskStore } from "@/src/storage/task-storage";

export function TaskList() {
  const { listId } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskStore();

  const numericListId = Number(listId);

  const filteredTasks = tasks.filter(
    (task) => task.listId === numericListId
  );

  const toggleTask = (taskId: number, currentValue: boolean) => {
    updateTask(taskId, { isFinished: !currentValue });
  };

  const renderItem = ({ item }: { item: Task }) => {
    const handleToggle = () => toggleTask(item.id, item.isFinished);

    return (
      <View style={styles.row}>
        <Checkbox
          value={item.isFinished}
          onValueChange={handleToggle}
        />

        <Pressable
          style={styles.textPressable}
          onPress={handleToggle}
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

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTasks}
        extraData={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text>There is no task for this list... create one!</Text>
        }
      />
    </View>
  );
}
