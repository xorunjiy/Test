import constants from '../../constants';

const initialState = {
    [constants.EDIT_TASK_MODAL_WINDOW_TYPE]: {
        data: null,
        isShow: false,
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case constants.OPEN_MODAL_WINDOW: {
            const { type, data = null } = action.payload;

            return {
                ...state,
                [type]: {
                    ...state[type],
                    data: data,
                    isShow: true,
                }
            }
        }
        case constants.CLOSE_MODAL_WINDOW: {
            const { type } = action.payload;

            return {
                ...state,
                [type]: {
                    ...state[type],
                    isShow: false,
                }
            }
        }
        default:
            return state;
    }
}
