import constants from '../../constants';

export const addTaskRequest = payload => ({
    type: constants.ADD_TASK_REQUEST,
    payload
})