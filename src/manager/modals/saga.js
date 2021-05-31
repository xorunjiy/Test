import constants from '../../constants';
import * as api from '../../REST';
import * as actions from './actions';
import formDataCreator from '../../utils/formDataCreator';
import { takeEvery, call, put } from 'redux-saga/effects';

export function* watchModals() {
  yield takeEvery(constants.EDIT_TASK_REQUEST, workerEditTask);
}

function* workerEditTask(action) {
  try {
    const formData = yield call(formDataCreator, action.payload);
    const response = yield call(api.editTask, formData, action.payload.id);
    const { status } = response;
    if (status === 'error') {
      alert('Need authorization');
    } else {
      yield put(actions.getTasksRequest());
    }
  } catch (err) {
    console.error('ERROR', err);
  }
}
