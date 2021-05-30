import constants from '../../constants';

const initialState = {
    userToken: '',
    isLogged: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.SIGN_IN_SUCCESS:
            return {
                ...state,
                userToken: action.payload,
                isLogged: true
            }
        case constants.LOG_OUT:
            return {
                ...state,
                userToken: '',
                isLogged: false
            }
        default:
            return state;
    }
}