import { combineReducers } from "redux";
import userData from "./users";
import postData from "./posts";

export default combineReducers({
    userData,
    postData
})