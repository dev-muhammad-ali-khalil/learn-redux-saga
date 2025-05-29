import { GET_USERS } from '../constants';

const initialState = {
    users: []
}

const userData = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, users: action.users
            }
        default:
            return state
    }
}

export default userData