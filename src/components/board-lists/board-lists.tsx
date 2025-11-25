import data from "@/src/data/data.json";
import styles from "./styles";
import { FlatList, View, Pressable, Text } from "react-native";
import { Board } from "@/src/types/board";
import { BoardThumbnail } from "./image-thumbnail/board-thumbnail";
import { useRouter } from "expo-router";

export function BoardList() {
    const boards = data.boards as Board[];
    const router = useRouter();
    return (
        <View style={styles.listContainer}>
            <FlatList<Board>
                numColumns={1}
                data={boards}
                keyExtractor={(board) => board.id.toString()}
                renderItem={({ item }) => <BoardThumbnail  
                board={item}
                onPress={() => 
                    router.push({
                        pathname: "/lists",
                        params: { boardId: String(item.id) },
                })
            }
                />}
                
            />
            <Pressable
                style={styles.plusbutton}
                onPress={() => {
                    router.push("/createboard")
                }}
            >
                <Text style={styles.plusbuttontext}>+</Text>
            </Pressable>
        </View>
    );
}