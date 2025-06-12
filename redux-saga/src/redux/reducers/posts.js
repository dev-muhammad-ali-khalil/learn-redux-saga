import { GET_POSTS_SUCCESS } from '../constants';

const initialState = {
    posts: []
}

const postData = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state, posts: action.posts
            }
        default:
            return state
    }
}

export default postData