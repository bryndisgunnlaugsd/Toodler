import React, { createContext, useContext, useState } from "react";
import { Task } from "../types/task";
import { TaskStoreType } from "../types/task-storage";
import data from "../data/data.json";

const taskStore = createContext<TaskStoreType | null>(null);

export function TaskStoreProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(data.tasks);

  const getNextId = () =>
    (tasks.length ? Math.max(...tasks.map((task) => task.id)) : 0) + 1;

  const addTask: TaskStoreType["addTask"] = (listId, name, description) => {
    const newTask: Task = {
      id: getNextId(),
      listId,
      name,
      description,
      isFinished: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask: TaskStoreType["deleteTask"] = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

const updateTask: TaskStoreType["updateTask"] = (id, updates) => {
  setTasks((prev) =>
    prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
  );
};


  return (
    <taskStore.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </taskStore.Provider>
  );
}

export function useTaskStore() {
  const ctx = useContext(taskStore);
  if (!ctx) throw new Error("useTaskStore must be inside TaskStoreProvider");

  return ctx;
}
