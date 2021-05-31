import constants from '../../constants';

export const setTasks = payload => ({
    type: constants.GET_TASKS_SUCCESS,
    payload
});