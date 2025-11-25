import { View } from "react-native";
import styles from "./styles";
import { BoardList } from "@/src/components/board-lists/board-lists";

export function Boards() {
    return(
        <View style={styles.container}>
            <BoardList/>
        </View>
    )
}