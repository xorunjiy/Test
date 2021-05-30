import { combineReducers } from 'redux';
import todoModule from '../../manager/todoManager/reducer';
import loginModule from '../../manager/loginManager/reducer';
import modals from '../../manager/modals/reducer';

export default combineReducers({
    todoModule, loginModule, modals
});
