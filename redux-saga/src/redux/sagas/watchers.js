import { takeEvery } from "redux-saga/effects";
import { GET_USERS } from "../constants";
import { fetchUsers } from "./workers";

function* mySaga() {
    yield takeEvery(GET_USERS, fetchUsers);
}

export default mySaga