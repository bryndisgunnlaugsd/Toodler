import React, { createContext, useContext, useEffect, useState } from "react";
import { List } from "../types/list"
import { ListStoreType } from "../types/list-storage";
import data from "../data/data.json";

const ListStore = createContext<ListStoreType | null>(null);

export function ListStoreProvider({ children }: { children: React.ReactNode }) {
  const [lists, setLists] = useState<List[]>([]);

// Load initial lists from data.json
useEffect(() => {
    setLists(data.lists); 
}, []);

const addList = (boardId: number, name: string, color: string) => {
    const newList: List = {
      id: Date.now(),       // unique ID
      boardId,
      name,
      color,
    };
    setLists(prev => [...prev, newList]);
  };

  return (
    <ListStore.Provider value={{ lists, addList }}>
      {children}
    </ListStore.Provider>
  );
}

export function useListStore() {
  const ctx = useContext(ListStore);
  if (!ctx) throw new Error("useListStore must be inside ListStoreProvider");
  return ctx;
}
