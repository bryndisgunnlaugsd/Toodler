import { Task } from "./task";

export type TaskStoreType = {
  tasks: Task[];
  addTask: (listId: number, name: string, description: string, isFinished: boolean) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, updates: { name?: string; description?: string }) => void;
};