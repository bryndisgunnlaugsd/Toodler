import { TaskList } from "@/src/components/task-list/task-list";
import styles from "./styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { UseListStore } from "@/src/storage/list-storage";

export function Tasks() {
  const router = useRouter();
  const { listId } = useLocalSearchParams();
  const { lists } = UseListStore();

  const currentList = lists.find(
    (list) => list.id === Number(listId)
  );

  return (
    <View
      style={[
        styles.container,
        currentList && { backgroundColor: currentList.color },
      ]}
    >
      <View style={styles.headerRow}>
        <Text style={styles.title}>{currentList?.name}</Text>

        <TouchableOpacity
          style={styles.addButtonContainer}
          onPress={() =>
            router.push({
              pathname: "/create-task",
              params: { listId: listId?.toString() },
            })
          }
        >
          <Text style={styles.addButton}>＋</Text>
        </TouchableOpacity>
      </View>

      <TaskList />
    </View>
  );
}
