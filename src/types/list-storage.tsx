import { List } from "./list";

export type ListStoreType = {
  lists: List[];
  addList: (boardId: number, name: string, color: string) => void;
};