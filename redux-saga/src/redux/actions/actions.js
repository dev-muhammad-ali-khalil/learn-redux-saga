import { GET_USERS_REQUEST } from '../constants';

export const getUsers = (toasts) => {
    return {
        type: GET_USERS_REQUEST,
        payload: toasts
    }
}