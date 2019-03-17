import { SET_MODAL } from './types';

export const setModal = (content) => {
    return {
        type: SET_MODAL,
        payload: content
    }
}