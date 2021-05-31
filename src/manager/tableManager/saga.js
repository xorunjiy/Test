import constants from '../../constants';
import * as api from '../../REST';
import * as actions from './actions';
import {
    getCurrentPage,
    getCurrentSortField,
    getCurrentSortDirection,
} from './selectors';
import { takeEvery, call, put, select } from 'redux-saga/effects';

export function* watchTableManager() {
    yield takeEvery([
        constants.GET_TASKS_REQUEST,
        constants.SORT_FIELD_REQUEST,
        constants.CHANGE_PAGE
    ], workerGetTasks);
}

function* workerGetTasks() {
    try {
        const currentPage = yield select(getCurrentPage);
        const currentSortField = yield select(getCurrentSortField);
        const isCurrentSortDirectionDesc = yield select(getCurrentSortDirection);
        const currentURL = `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=aleksey&sort_field=${currentSortField}&page=${currentPage}&sort_direction=${isCurrentSortDirectionDesc ? 'desc': 'asc'}`;
        const response = yield call(api.getAllTasks, currentURL);
        const tasksData = response.message;
        const pageQuantity = Math.ceil(tasksData.total_task_count / 3);
        tasksData.pageQuantity = pageQuantity;

        yield put(actions.onSetTasks(tasksData))
    } catch (err) {
        console.error('ERROR', err);
    }
}