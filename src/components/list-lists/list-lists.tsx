import data from "@/src/data/data.json";
import styles from "./styles";
import { FlatList, View } from "react-native";
import { List } from "@/src/types/list";

export function ListList() {
    const lists = data.lists as List[];
    return (
        <View style={styles.listContainer}>
            <FlatList<List>
                numColumns={1}
                data={lists}
            />
        </View>

    )
}