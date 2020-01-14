import { LOAD_TYPE, LOAD_IMAGES, LOAD_IMAGE } from "../actions/types";

const initialState = {
    message: 'hello from reducer',
    images: []
}

export default function(state=initialState, action) {
    switch(action.type) {
        case LOAD_TYPE:
            return {
                ...state
            }
        case LOAD_IMAGES:
            return {
                ...state
            }
        case LOAD_IMAGE:
            return {
                ...state,
                images: action.payload
            }
        default:
            return state
    }
} 