import { List } from "./list";

export type ListStoreType = {
  lists: List[];
  addList: (boardId: number, name: string, color: string) => void;
  deleteList: (id: number) => void;
  updateList: (id: number, updates: { name?: string; color?: string }) => void;
};