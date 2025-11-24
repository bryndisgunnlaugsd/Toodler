import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import data from "../../data/data.json";
import { ListCatalogue } from "@/src/components/list-catalogue/list-catalogue";

export function Lists() {
    const router = useRouter();
    const { boardId } = useLocalSearchParams();

    const filteredLists = data.lists.filter(
        list => list.boardId === Number(boardId)
    );

    return(
        
        <View style={styles.container}>
            <Text style={styles.title}>
                Lists for Board {boardId}
            </Text>
            
            <ListCatalogue/>
        </View>
    )
}