import { SET_MODAL } from '../actions/types'
const initialState = {
    modalContent: ''
}
const generalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_MODAL:
            return {
                ...state,
                modalContent: payload
            }
        default:
            return state
    }
}
export default generalReducer;