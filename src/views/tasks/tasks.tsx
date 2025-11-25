import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TaskList } from "@/src/components/task-list/task-list";
import { useRouter } from "expo-router";
import { View } from "react-native";
import styles from "./styles";

export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>(tasksData);

    const handleToggleTask = (id: number) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, isFinished: !task.isFinished} : task
            )
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
        </SafeAreaView>
    )
}