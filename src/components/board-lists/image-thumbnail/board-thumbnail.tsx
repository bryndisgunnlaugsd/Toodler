import { Board } from "@/src/types/board";
import { Image,View, Text } from "react-native";
import styles from "./styles";

interface BoardThumbnailProps{
    image: Board;
}

export function BoardThumbnail({image}: BoardThumbnailProps) {
    return (<View>
        <Image 
        resizeMode="cover" 
        source={{uri: image.thumbnailPhoto}} 
        style={styles.image} />
        <Text>{image.name}</Text>
    </View>
    );
}