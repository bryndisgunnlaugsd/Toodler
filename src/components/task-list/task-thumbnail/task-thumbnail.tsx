import { Task } from "@/src/types/task";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

type Props = {
    task: Task;
    onToggle: () => void;
}

export default function TaskThumbnail({ task, onToggle }: Props) {
    return (
    <Pressable style={styles.row} onPress={onToggle}>
      <View style={styles.textContainer}>
        <Text style={[styles.name, task.isFinished && styles.nameDone]}>
          {task.name}
        </Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>

      <View style={[styles.checkbox, task.isFinished && styles.checkboxChecked]}>
        {task.isFinished && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </Pressable>
    );
}