import constants from '../../constants';

export const signInSuccess = payload => ({
    type: constants.SIGN_IN_SUCCESS,
    payload
});