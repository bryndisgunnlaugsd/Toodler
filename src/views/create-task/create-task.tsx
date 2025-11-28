import { useLocalSearchParams } from "expo-router";
import React from "react";
import { CreateTaskComp } from "@/src/components/create-task/create-task";
import { EditTaskComp } from "@/src/components/edit-task/edit-task";

export function CreateTask() {
  const { listId, taskId } = useLocalSearchParams();

  const editing = !!taskId;

  if (editing) {
    return <EditTaskComp taskId={Number(taskId)} />;
  }

  return (
    <CreateTaskComp
      listId={listId ? Number(listId) : undefined}
    />
  );
}
