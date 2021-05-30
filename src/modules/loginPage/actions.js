import constants from '../../constants';

export const signInRequest = payload => ({
    type: constants.SIGN_IN_REQUEST,
    payload
})