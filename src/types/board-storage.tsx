import { Board } from "./board";

export type BoardStoreType = {
  boards: Board[];
  addBoard: ( name: string, description: string, thumbnailPhoto:string) => void;
  deleteBoard: (id: number) => void;
  updateBoard: (id: number, updates: { name?: string; description?: string; thumbnailPhoto?: string; }) => void;
};