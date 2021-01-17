import { all, fork } from "redux-saga/effects";
import usersSagas from "./users";

const sagas = [
  usersSagas,
];

export function* rootSaga(services = {}) {
  yield all(sagas.map((saga) => fork(saga, services)));
}
