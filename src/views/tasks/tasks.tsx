import { TaskList } from "@/src/components/task-list/task-list";
import { useRouter } from "expo-router";
import { View } from "react-native";
import styles from "./styles";

export function Tasks() {
    const router = useRouter();
    return(
        
        <View style={styles.container}>
            <TaskList/>

        </View>
    )
}