import { Board } from "@/src/types/board";
import { Image,View, Text, Pressable } from "react-native";
import styles from "./styles";

interface BoardThumbnailProps{
    board: Board;
    onPress?: () => void;
}

export function BoardThumbnail({ board, onPress }: BoardThumbnailProps) {
    return (
        <Pressable onPress={onPress} style={styles.card}>
            <Image 
                resizeMode="cover" 
                source={{ uri: board.thumbnailPhoto }} 
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{board.name}</Text>
                <Text style={styles.description}>{board.description}</Text>
            </View>
        </Pressable>
    );
}