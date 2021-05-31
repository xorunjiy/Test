import constants from '../../constants';
import * as api from '../../REST';
import * as actions from './actions';
import formDataCreator from '../../utils/formDataCreator';
import { takeEvery, call, put } from 'redux-saga/effects';
import {setTokenLS} from "../../utils/logicLS";

export function* watchLoginModule() {
  yield takeEvery(constants.SIGN_IN_REQUEST, workerSignIn);
  yield takeEvery(constants.CHECK_STATUS, workerCheckUserStatus);
  yield takeEvery(constants.LOG_OUT, workerlogOut);
}

function* workerSignIn(action) {
  try {
      const formData = yield call(formDataCreator, action.payload)
      const response = yield call(api.logIn, formData);
      const { status, message } = response;

      if (status === 'ok'){
        yield put (actions.onSignInSuccess(message.token))
        yield call(setTokenLS, message.token);
      } else {
        alert(message.password)
      }
  } catch (err) {
        console.error('ERROR', err);
  }
}

function* workerCheckUserStatus() {
  try {
    if(localStorage.getItem('userToken')){
      const userToken = JSON.parse(localStorage.getItem('userToken'));

      yield put (actions.onSignInSuccess(userToken))
    }
  } catch (err) {
    console.error('ERROR', err);
  }
}

function workerlogOut() {
  try {
    localStorage.removeItem('userToken')
  } catch (err) {
    console.error("ERROR", err);
  }
}