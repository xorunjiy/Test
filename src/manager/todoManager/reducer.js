import constants from '../../constants';

const initialState = {
    tasks: [],
    currentPage: 1,
    pageQuantity: 0,
    totalTasksCount: 0,
    currentSortField: 'username',
    isCurrentSortDirectionDesc: true,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload.tasks,
                pageQuantity: action.payload.pageQuantity,
                totalTasksCount: action.payload.total_task_count,
            }
        case constants.CHANGE_PAGE_REQUEST:
            return {
                ...state,
                currentPage: action.payload
            }
        case constants.SORT_FIELD_REQUEST:
            return {
                ...state,
                currentSortField: action.payload,
                isCurrentSortDirectionDesc: (action.payload === state.currentSortField) && !state.isCurrentSortDirectionDesc,
            }
        default:
            return state;
    }
}