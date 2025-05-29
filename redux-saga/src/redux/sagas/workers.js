import { call, put } from "redux-saga/effects";
import { GET_USERS_SUCCESS } from "../constants";

const fetchUserData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
}

export function* fetchUsers(action) {
    const users = yield call(fetchUserData);
    yield put({ type: GET_USERS_SUCCESS, users });
}