import React, {createContext, useContext, useEffect, useState} from "react";
import { Board } from "../types/board";
import { BoardStoreType } from "../types/board-storage";
import data from "../data/data.json";

const BoardStore = createContext<BoardStoreType | null>(null);

export function BoardStoreProvider({ children }: {children: React.ReactNode}) {
    const[boards, setBoards] = useState<Board[]>([]);

useEffect(() => {
    setBoards(data.boards);
}, []);

    const nextId = boards.length > 0
        ? Math.max(...boards.map(b => b.id)) + 1
        : 1;

    const addBoard = (name: string, description: string, thumbnailPhoto: string) => {
        const newBoard: Board = {
            id: nextId,
            name,
            description,
            thumbnailPhoto,
        };

        setBoards(prev => [...prev, newBoard]);
    };

    const deleteBoard = (id:number) => {
        setBoards((prev) => prev.filter((b) => b.id !== id));
    };

    const updateBoard = (
        id:number,
        updates: {name?:string; description?:string; thumbnailPhoto?:string;}
    ) => {
        setBoards((prev) =>
        prev.map((b) => (b.id === id ? {...b, ...updates}
            : b))
        );
    };

    return (
        <BoardStore.Provider value= {{ boards, addBoard, deleteBoard, updateBoard}}>
            {children}
        </BoardStore.Provider>
    );
}

export function useBoardStore() {
    const ctx = useContext(BoardStore);
    if (!ctx) throw new Error("useBoardStore must be inside BoardStoreProvider");
return ctx;
}