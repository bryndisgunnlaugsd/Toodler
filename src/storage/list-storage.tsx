import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../data/data.json";
import { List } from "../types/list";
import { ListStoreType } from "../types/list-storage";

const listStore = createContext<ListStoreType | null>(null);

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

    const deleteList = (id: number) => {
        setLists((prev) => prev.filter((l) => l.id !== id));
    };

    const updateList = (
        id: number,
        updates: { name?: string; color?: string }
    ) => {
        setLists((prev) =>
            prev.map((l) => (l.id === id ? { ...l, ...updates } : l))
        );
    };

    return (
    <listStore.Provider value={{ lists, addList, deleteList, updateList }}>
        {children}
    </listStore.Provider>
    );
}

export function useListStore() {
    const ctx = useContext(listStore);
    if (!ctx) throw new Error("useListStore must be inside ListStoreProvider");

return ctx;
}
