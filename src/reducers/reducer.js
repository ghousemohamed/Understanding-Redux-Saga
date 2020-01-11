import { LOAD_TYPE, LOAD_IMAGES } from "../actions/types";

const initialState = {
    message: 'hello from reducer',
    images: []
}

export default function(state=initialState, action) {
    switch(action.type) {
        case LOAD_TYPE:
            return {
                ...state,
                images: action.payload
            }
        case LOAD_IMAGES:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}