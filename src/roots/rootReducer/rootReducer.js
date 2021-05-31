import { combineReducers } from 'redux';
import tableManage from '../../manager/tableManager/reducer';
import loginManager from '../../manager/loginManager/reducer';
import modals from '../../manager/modals/reducer';

export default combineReducers({
    tableManage, loginManager, modals
});
