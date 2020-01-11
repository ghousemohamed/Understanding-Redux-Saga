import { LOAD_TYPE, LOAD_IMAGES } from "./types";
import axios from 'axios';
// export const loadType = () => dispatch => {
//     dispatch({
//         type: LOAD_TYPE,
//         payload: 'Hello from actions'
//     })
// }

export const loadType = () => ({
    type: LOAD_TYPE,
    payload: 'This is a message that has to work now'
})
export const loadImages = () => {
    
    return {
        type: LOAD_IMAGES,
        payload: 'This is a message from the action LOAD_IMAGES'
    }

}