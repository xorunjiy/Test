import { all, call } from 'redux-saga/effects';
import { watchTodoModule } from '../../manager/todoManager/saga';
import { watchHeaderModule } from '../../manager/headerManager/saga';
import { watchLoginModule } from '../../manager/loginManager/saga';
import { watchModals } from '../../manager/modals/saga';

const sagaList = [
    watchTodoModule, watchHeaderModule, watchLoginModule, watchModals
];

export function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}
