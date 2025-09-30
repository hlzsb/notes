import apiClient from "./apiClient";
import type { Note } from "../types/Note";

export const getNotes = async (): Promise<Note[]> => {
  const res = await apiClient.get<Note[]>("/notes");
  return res.data;
};
