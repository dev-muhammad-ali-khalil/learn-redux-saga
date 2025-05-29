import { GET_USERS_SUCCESS } from '../constants';

const initialState = {
    users: []
}

const userData = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state, users: action.users
            }
        default:
            return state
    }
}

export default userData