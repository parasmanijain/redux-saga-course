// ----------------------
// Action Types
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

// ----------------------
// Action Payload Types
// ----------------------
export interface GetUsersSuccessPayload {
  items: any[]; // Replace with your User type if available
}

export interface CreateUserPayload {
  firstName: string;
  lastName: string;
}

export interface DeleteUserPayload {
  userId: string | number;
}

export interface UsersErrorPayload {
  error: unknown;
}

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
