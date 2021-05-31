import constants from '../../constants';

export const getTasksRequest = () => ({
    type: constants.GET_TASKS_REQUEST
})

export const sortFieldRequest = payload => ({
    type: constants.SORT_FIELD_REQUEST,
    payload
})

export const changePage = payload => ({
    type: constants.CHANGE_PAGE,
    payload
})

export const openEditTaskModal = data => ({
    type: constants.OPEN_MODAL,
    payload: {
        type: constants.EDIT_TASK_TYPE,
        data
    }
})

export const checkUserStatus = () => ({
    type: constants.CHECK_STATUS,
})

export const logOut = () => ({
    type: constants.LOG_OUT,
})