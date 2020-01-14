import { LOAD_TYPE, LOAD_IMAGES, LOAD_IMAGE } from "./types";
import axios from 'axios';
// export const loadType = () => dispatch => {
//     dispatch({
//         type: LOAD_TYPE,
//         payload: 'Hello from actions'
//     })
// }

export const loadType = () => ({
    type: LOAD_TYPE
})
export const loadImages = () => {
    
    return {
        type: LOAD_IMAGES
    }

}

export const setImages = (images) => {
    return {
        type: LOAD_IMAGE,
        payload: images
    }
}