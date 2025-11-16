import { CreateUserPayload, GetUsersSuccessPayload, Types, UsersErrorPayload } from "../models";



// ----------------------
// Action Creators
// ----------------------
export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = (payload: GetUsersSuccessPayload) => ({
  type: Types.GET_USERS_SUCCESS,
  payload,
});

export const createUserRequest = (payload: CreateUserPayload) => ({
  type: Types.CREATE_USER_REQUEST,
  payload,
});

export const deleteUserRequest = (userId: string | number) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: { userId },
});

export const usersError = (payload: UsersErrorPayload) => ({
  type: Types.USERS_ERROR,
  payload,
});

// ----------------------
// Combined Action Type
// ----------------------
export type UsersActions =
  | ReturnType<typeof getUsersRequest>
  | ReturnType<typeof getUsersSuccess>
  | ReturnType<typeof createUserRequest>
  | ReturnType<typeof deleteUserRequest>
  | ReturnType<typeof usersError>;
