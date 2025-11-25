import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
//import data from "../../data/data.json";
import { useListStore } from "@/src/storage/list-storage";

export function ListCatalogue() {
    const router = useRouter();
    const { boardId } = useLocalSearchParams();

    const { lists } = useListStore();

    const filteredLists = lists.filter(
    list => list.boardId === Number(boardId)
    );

    // const filteredLists = data.lists.filter(
    //     list => list.boardId === Number(boardId)
    // );
    return(
            
        <View style={styles.container}>
            <FlatList
                data={filteredLists}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.listItem, { backgroundColor: item.color }]}
                        onPress={() => router.push({
                            pathname: "/tasks",
                            params: { listId: item.id.toString() }
                        })}>
                        <Text style={styles.listName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <Text>No lists found for this board</Text>
                }
            />
        </View>
        )
}