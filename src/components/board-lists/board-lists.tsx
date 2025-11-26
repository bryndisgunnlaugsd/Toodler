import styles from "./styles";
import { FlatList, View, Pressable, Text } from "react-native";
import { Board } from "@/src/types/board";
import { BoardThumbnail } from "./image-thumbnail/board-thumbnail";
import { useRouter } from "expo-router";
import { useBoardStore } from "@/src/storage/board-storage";
import { useState } from "react";

export function BoardList() {
    const { boards, deleteBoard } = useBoardStore();
    const router = useRouter();

    const [openMenuId, setOpenMenuId] = useState<number | null>(null);

    const handleEdit = (id: number) => {
    router.push({
        pathname: "/createboard",
        params: { boardId: String(id) }
    });
    };

    const handleDelete = (id: number) => {
        deleteBoard(id);
        setOpenMenuId(null);
    };

    return (
        <View style={styles.listContainer}>
        <FlatList<Board>
            numColumns={1}
            data={boards}
            keyExtractor={(board) => board.id.toString()}
            renderItem={({ item }) => (
            <BoardThumbnail
                board={item}
                onPress={() =>
                router.push({
                    pathname: "/lists",
                    params: { boardId: String(item.id) },
                })
                }
                menuOpen={openMenuId === item.id}
                onToggleMenu={() =>
                setOpenMenuId((prev) => (prev === item.id ? null : item.id))
                }
                onEdit={() => handleEdit(item.id)}
                onDelete={() => handleDelete(item.id)}
            />
            )}
            ListEmptyComponent={<Text>No lists found for this board</Text>}
        />
            <Pressable
                style={styles.plusbutton}
                onPress={() => {
                    router.push("/createboard");
                }}
            >
                <Text style={styles.plusbuttontext}>+</Text>
            </Pressable>
        </View>
    );
}