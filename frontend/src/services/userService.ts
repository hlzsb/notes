import apiClient from "./apiClient";
import type { User } from "../types/User";

export const getUsers = async (): Promise<User[]> => {
  const res = await apiClient.get<User[]>("/users");
  return res.data;
};
