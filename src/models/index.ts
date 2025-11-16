export interface CreateUserPayload {
  firstName: string;
  lastName: string;
}

export interface User {
  id: string | number;
  firstName: string;
  lastName: string;
}

// ----------------------
// Action Payload Types
// ----------------------
export interface GetUsersSuccessPayload {
  items: any[]; // Replace with your User type if available
}

export interface DeleteUserPayload {
  userId: string | number;
}

export interface UsersErrorPayload {
  error: unknown;
}

// ----------------------
export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  DELETE_USER_REQUEST: "users/delete_user_request",
  CREATE_USER_REQUEST: "users/create_user_request",
  USERS_ERROR: "users/user_error",
} as const;

// Convert to string literal union
export type UserActionType = (typeof Types)[keyof typeof Types];
