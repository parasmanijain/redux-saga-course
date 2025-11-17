import {
  takeEvery,
  takeLatest,
  take,
  call,
  put,
  fork,
} from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { getUsersSuccess, usersError } from "../actions/users";
import {
  getUsers as getApiUsers,
  deleteUser as deleteApiUser,
  createUser as createApiUser,
} from "../api/users";
import { Types } from "../models";

function* getUsers(): SagaIterator {
  try {
    const result = yield call(getApiUsers);
    yield put(
      getUsersSuccess({
        items: result.data,
      })
    );
  } catch (e) {
    yield put(
      usersError({
        error: "An error occurred when trying to get the users",
      })
    );
  }
}

function* watchGetUsersRequest(): SagaIterator {
  yield takeEvery(
    Types.GET_USERS_REQUEST as typeof Types.GET_USERS_REQUEST,
    getUsers
  );
}

function* deleteUser(userId: any): SagaIterator {
  try {
    yield call(deleteApiUser, userId);
    yield call(getUsers);
  } catch (e) {
    yield put(
      usersError({
        error: "An error occurred when trying to delete the user",
      })
    );
  }
}

function* watchDeleteUserRequest(): SagaIterator {
  while (true) {
    const { payload } = yield take(
      Types.DELETE_USER_REQUEST as typeof Types.DELETE_USER_REQUEST
    );
    yield call(deleteUser, payload.userId);
  }
}

function* createUser({ payload }: { payload: any }): SagaIterator {
  try {
    yield call(createApiUser, {
      firstName: payload.firstName,
      lastName: payload.lastName,
    });
    yield call(getUsers);
  } catch (e) {
    yield put(
      usersError({
        error: "An error occurred when trying to create the user",
      })
    );
  }
}

function* watchCreateUserRequest(): SagaIterator {
  yield takeLatest(Types.CREATE_USER_REQUEST as any, createUser);
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchDeleteUserRequest),
  fork(watchCreateUserRequest),
];

export default userSagas;
