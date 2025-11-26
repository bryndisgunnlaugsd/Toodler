import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import data from "../../data/data.json";
import { ListCatalogue } from "@/src/components/list-catalogue/list-catalogue";
import { Board } from "@/src/types/board"

export function Lists() {
    const router = useRouter();
    const { boardId } = useLocalSearchParams();

    const currentBoard: Board | undefined = data.boards.find(
    (board) => board.id === Number(boardId)
  );

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {currentBoard?.name}
                </Text>
                
                <TouchableOpacity
                    style={styles.addButtonContainer}
                    onPress={() =>
                        router.push({
                        pathname: "/create-list",
                        params: { boardId: boardId?.toString() },
                        })
                    }
                >
                <Text style={styles.addButton}>＋</Text>
            </TouchableOpacity>

            <ListCatalogue/>

            </View>
        </View>
    )
}