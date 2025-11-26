import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { BoardList } from "@/src/components/board-lists/board-lists";
import { router } from "expo-router";

export function Boards() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>All Boards</Text>
            <TouchableOpacity
                style={styles.addButtonContainer}
                onPress={() =>
                    router.push({
                    pathname: "/create-board",
                    })
                }
                >
            
            <Text style={styles.addButton}>＋</Text>
            </TouchableOpacity>

            </View>
            
            <BoardList/>
        </View>
    );
}