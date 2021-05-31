import constants from '../../constants';

export const addTaskRequest = payload => ({
    type: constants.SAVE_TASK,
    payload
})