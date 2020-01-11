import { LOAD_TYPE } from "./types";

export const loadType = () => dispatch => {
    dispatch({
        type: LOAD_TYPE,
        payload: 'Hello from actions'
    })
}