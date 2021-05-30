import constants from '../../constants';

export const onGetTasksRequest = () => ({
    type: constants.GET_TASKS_REQUEST
})

export const onSortFieldRequest = payload => ({
    type: constants.SORT_FIELD_REQUEST,
    payload
})

export const onChangePage = payload => ({
    type: constants.CHANGE_PAGE_REQUEST,
    payload
})

export const onOpenEditTaskModal = data => ({
    type: constants.OPEN_MODAL_WINDOW,
    payload: {
        type: constants.EDIT_TASK_MODAL_WINDOW_TYPE,
        data
    }
})

export const onCheckUserStatus = () => ({
    type: constants.CHECK_USER_STATUS,
})

export const onLogOut = () => ({
    type: constants.LOG_OUT,
})