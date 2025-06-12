import { GET_USERS_REQUEST } from '../constants';
import { GET_POSTS_REQUEST } from '../constants';

export const getUsers = (toasts) => {
    return {
        type: GET_USERS_REQUEST,
        payload: toasts
    }
}

export const getPosts = () => {
    return {
        type: GET_POSTS_REQUEST
    }
}