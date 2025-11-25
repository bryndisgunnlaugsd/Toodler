import React, { createContext, useContext, useEffect, useState } from "react";
import { Task } from "../types/task"
import { TaskStoreType } from "../types/task-storage";
import data from "../data/data.json";

const TaskStore = createContext<TaskStoreType | null>(null);

export function TaskStoreProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);


useEffect(() => {
    setTasks(data.tasks);
}, []);

const nextId = Math.max(...data.tasks.map(task => task.id)) + 1;

const AddTask = (listId: number, name: string, description: string, isFinished: false) => {
    const NewTask: Task = {
        id: nextId,
        listId,
        name,
        description,
        isFinished: false,
    };
    setTasks(prev => [...prev, NewTask]);
};

const DeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
};

const UpdateTask = (
    id: number,
    updates: { name?: string; description?: string}
) => {
    setTasks((prev) =>
        prev.map((t) => (t.id === id ? {...t, ...updates} : t))
    );
};

return (
    <TaskStore.Provider value={{tasks, AddTask, DeleteTask, UpdateTask }}>
        
    </TaskStore.Provider>
    },}}
)
}