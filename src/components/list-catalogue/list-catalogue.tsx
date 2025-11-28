import { useListStore } from "@/src/storage/list-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function ListCatalogue() {
    const router = useRouter();
    const { boardId } = useLocalSearchParams();

    const { lists, deleteList } = useListStore();

    const [openMenuId, setOpenMenuId] = useState<number | null>(null);

    const filteredLists = lists.filter(
        (list) => list.boardId === Number(boardId)
    );

    const handleEdit = (id: number) => {
        router.push({
        pathname: "/create-list",
        params: {
            boardId: boardId?.toString(),
            listId: id.toString(),
        },
        });
        setOpenMenuId(null);
    };


    //Deletes list (does not need its own component since it just sets the list to void in)
    const handleDelete = (id: number) => {
        deleteList(id);
        setOpenMenuId(null);
    };

    return (
        <View style={styles.container}>
        <FlatList
            data={filteredLists}
            keyExtractor={(item) => item.id.toString()}
            removeClippedSubviews={false}
            renderItem={({ item }) => {
            const isMenuOpen = openMenuId === item.id;

            return (
                <View
                    style={[
                        styles.listItem,
                        { backgroundColor: item.color },
                        isMenuOpen && styles.listItemActive,
                    ]}
                    >
                    {/* main clickable area: open tasks */}
                    <TouchableOpacity
                        style={styles.listInfo}
                        onPress={() =>
                        router.push({
                            pathname: "/tasks",
                            params: { listId: item.id.toString() },
                        })
                        }
                    >
                        <Text style={styles.listName}>{item.name}</Text>
                    </TouchableOpacity>

                    {/* 3-dots menu */}
                    <View style={styles.listMenuWrapper}>
                        <TouchableOpacity
                        style={styles.listMenuButton}
                        onPress={() =>
                            setOpenMenuId((prev) =>
                            prev === item.id ? null : item.id
                            )
                        }
                        >
                        <Text style={styles.listMenuIcon}>⋮</Text>
                        </TouchableOpacity>

                        {isMenuOpen && (
                        <View style={styles.listMenu}>
                            <TouchableOpacity onPress={() => handleEdit(item.id)}>
                            <Text style={styles.listMenuItem}>Edit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleDelete(item.id)}>
                            <Text style={styles.listMenuItemDelete}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                    </View>
                </View>
            );
            }}
            ListEmptyComponent={<Text>No lists found for this board</Text>}
        />
        </View>
    );
}
