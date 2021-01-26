import { fork, put, takeEvery, call } from "redux-saga/effects";
import { GET_USER_REQUEST, GET_SINGLE_USER_REQUEST } from "redux/constants";
import { setUsers, setUsersError, setUser, setUserError } from "redux/actions/users";
import { getUsers, getSingleUser } from "api/api";

function* watchGetUsers() {
  yield takeEvery(GET_USER_REQUEST, handleGetUsers);
}

function* watchGetUser() {
  yield takeEvery(GET_SINGLE_USER_REQUEST, handleGetUser);
}

function* handleGetUsers({payload}) {
  try {
    const response = yield call(getUsers, payload);
    yield put(setUsers(response));
  } catch (error) {
    console.log(error);
    if (error && error.response) yield put(setUsersError(error.response.data));
  }
}

function* handleGetUser({payload}) {
  try {
    const response = yield call(getSingleUser, payload);
    yield put(setUser(response));
  } catch (error) {
    console.log(error);
    if (error && error.response) yield put(setUserError(error.response.data));
  }
}

export default function* usersSagas() {
  yield fork(watchGetUsers);
  yield fork(watchGetUser);
}
