import { takeEvery } from "redux-saga/effects";
import { GET_USERS_REQUEST } from "../constants";
import { GET_POSTS_REQUEST } from "../constants";
import { fetchUsers } from "./workers";
import { fetchPosts } from "./workers";

function* mySaga() {
    yield takeEvery(GET_USERS_REQUEST, fetchUsers);
    yield takeEvery(GET_POSTS_REQUEST, fetchPosts);
}

export default mySaga