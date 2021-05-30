import constants from '../../constants';

export const onSignInSuccess = payload => ({
    type: constants.SIGN_IN_SUCCESS,
    payload
});