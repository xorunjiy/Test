import { all, call } from 'redux-saga/effects';
import { watchTableManager } from '../../manager/tableManager/saga';
import { watchHeaderModule } from '../../manager/headerManager/saga';
import { watchLoginModule } from '../../manager/loginManager/saga';
import { watchModals } from '../../manager/modals/saga';

const sagaList = [
    watchTableManager, watchHeaderModule, watchLoginModule, watchModals
];

export function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}
