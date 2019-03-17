import { SET_ERR } from '../actions/types';
const initialState = {};

const errrorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ERR:
            return {
                ...payload
            }
        default:
            return state;
    }
}

export default errrorReducer;