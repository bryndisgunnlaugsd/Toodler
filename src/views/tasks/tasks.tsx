import { TaskList } from "@/src/components/task-list/task-list";
import { useListStore } from "@/src/storage/list-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function Tasks() {
  const router = useRouter();
  const { listId } = useLocalSearchParams();
  const { lists } = useListStore();

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
