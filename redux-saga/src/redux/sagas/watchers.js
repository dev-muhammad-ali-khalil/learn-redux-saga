import { takeEvery } from "redux-saga/effects";
import { GET_USERS_REQUEST } from "../constants";
import { fetchUsers } from "./workers";

function* mySaga() {
    yield takeEvery(GET_USERS_REQUEST, fetchUsers);
}

export default mySaga