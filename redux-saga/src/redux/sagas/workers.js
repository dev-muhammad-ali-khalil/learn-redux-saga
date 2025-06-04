import { call, put, select } from "redux-saga/effects";
import { GET_USERS_SUCCESS } from "../constants";

const fetchUserData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => response.json());
}

export function* fetchUsers(action) {
    const data = yield select((state) => state.userData.users);
    if (data.length === 0) {
        const users = yield call(fetchUserData);
        yield put({ type: GET_USERS_SUCCESS, users });
        action.payload.successToast("Users fetched successfully!");
    }
    else {
        action.payload.warningToast("Users already fetched!");
    }
}