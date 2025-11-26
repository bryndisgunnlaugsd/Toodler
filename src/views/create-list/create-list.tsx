// src/views/create-list/create-list.tsx
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { CreateListComp } from "@/src/components/create-list/create-list-comp";
import { EditListComp } from "@/src/components/edit-list/edit-list-comp";

export function CreateList() {
  const { boardId, listId } = useLocalSearchParams();

  const editing = !!listId;

  if (editing) {
    return (
      <EditListComp
        listId={Number(listId)}
      />
    );
  }

  return (
    <CreateListComp
      boardId={boardId ? Number(boardId) : undefined}
    />
  );
}
