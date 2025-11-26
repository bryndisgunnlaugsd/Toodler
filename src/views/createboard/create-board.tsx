import { useLocalSearchParams } from "expo-router";
import React from "react";
import { CreateBoardComp } from "@/src/components/create-board/createboard";
import { EditBoardComp } from "@/src/components/edit-board/editboard";

export function CreateBoard() {
  const { boardId } = useLocalSearchParams();

  const editing = !!boardId;

  if (editing) {
    return <EditBoardComp boardId={Number(boardId)} />;
  }

  return <CreateBoardComp />;
}