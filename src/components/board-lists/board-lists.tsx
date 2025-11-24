import data from "@/src/data/data.json";
import styles from "./styles";
import { FlatList, View } from "react-native";
import { Board } from "@/src/types/board";
import { BoardThumbnail } from "./image-thumbnail/board-thumbnail";

export function BoardList() {
    const images = data.boards as Board[];
    return (
        <View style={styles.listContainer}>
            <FlatList<Board>
                numColumns={1}
                data={images}
                renderItem={({ item }) => <BoardThumbnail  image={item}/>}
                keyExtractor={(image) => image.id.toString()}
            />
        </View>
    );
}