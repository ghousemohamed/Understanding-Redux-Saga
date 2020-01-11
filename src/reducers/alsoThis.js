import { LOAD_TYPE } from "../actions/types";

const initialState = {
    this: 'This is a different reducer'
}

export default function(state=initialState, action) {
    switch(action.type) {
        case LOAD_TYPE:
            return {
                ...state,
                this: action.payload
            }
        default:
            return state
    }
}