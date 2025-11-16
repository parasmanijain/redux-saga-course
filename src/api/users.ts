import axios, { AxiosResponse } from "axios";

// -----------------------------
// Types (replace with real User type if you have one)
// -----------------------------
export interface User {
  id: string | number;
  firstName: string;
  lastName: string;
}

export interface CreateUserPayload {
  firstName: string;
  lastName: string;
}

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
