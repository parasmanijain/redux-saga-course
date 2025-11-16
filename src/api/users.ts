import axios, { AxiosResponse } from "axios";
import { CreateUserPayload, User } from "../models";

// -----------------------------
// API Calls
// -----------------------------
export const getUsers = (): Promise<AxiosResponse<User[]>> => {
  return axios.get<User[]>("/users", {
    params: {
      limit: 1000,
    },
  });
};

export const createUser = (
  payload: CreateUserPayload
): Promise<AxiosResponse<User>> => {
  return axios.post<User>("/users", payload);
};

export const deleteUser = (
  userId: string | number
): Promise<AxiosResponse<void>> => {
  return axios.delete<void>(`/users/${userId}`);
};
