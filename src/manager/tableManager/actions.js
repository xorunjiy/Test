import constants from '../../constants';

export const onSetTasks = payload => ({
    type: constants.GET_TASKS_SUCCESS,
    payload
});