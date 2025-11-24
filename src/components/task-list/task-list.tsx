import data from "@/src/data/data.json";
import { FlatList, View } from "react-native";
import styles from "../task-list/styles";
import { Task } from "@/src/types/task";
import { TaskThumbnail } from "./task-thumbnail/task-thumbnail";


export function TaskList() {
    const tasks = data.tasks as Task[];
    return(
        <View style ={styles.listContainer}>
            <FlatList
                numColumns={1}
                data={tasks}
                renderItem={({ item }) => <TaskThumbnail  task={item}/>}
                keyExtractor={(image) => image.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
                
            />
        </View>
    )
}