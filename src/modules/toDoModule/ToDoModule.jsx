import React, {useCallback, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/colors.js';
import { TodoWrapper, MainWrapper } from './styledComponents.js';
import CustomTable  from '../components/customTable/CustomTable.jsx';
import HeaderModule from '../HeaderModule';
import CustomPaginator from '../components/customPaginator/CustomPaginator.jsx';
import CustomButton from '../components/customButton/CustomButton.jsx';
import { Link }  from 'react-router-dom';

const TodoModule = props => {
    const {
        tasks,
        logOut,
        isLogged,
        changePage,
        currentPage,
        pageQuantity,
        checkUserStatus,
        getTasksRequest,
        sortFieldRequest,
        openEditTaskModal,
    } = props;

    useEffect(() => {
        getTasksRequest();
        checkUserStatus();
    }, [getTasksRequest, checkUserStatus]);

    const columnTitles = [
        {
            id: 2,
            text: 'User name',
            name: 'username'
        },
        {
            id: 3,
            text: 'E-mail',
            name: 'email'
        },
        {
            id: 4,
            text: 'Task text',
            name: 'text'
        },
        {
            id: 5,
            text: 'Task status',
            name: 'status'
        }];

    const sortField = useCallback( event => {
        sortFieldRequest(event.target.getAttribute('name')) 
    }, [sortFieldRequest]);

    const handlePage = useCallback( event => {
        const { id } = event.target;
        changePage(id);
    }, [changePage]);

    const onOpenModal = useCallback( event => {
        if(isLogged){
            let currentElementId = event.target.id || event.target.parentElement.id;
            tasks.find(element =>{
                event.preventDefault()
                if(+currentElementId === element.id){
                    const taskData = {
                            taskId: element.id,
                            taskText: element.text,
                            taskStatus: element.status
                        }
                    openEditTaskModal(taskData);
                }
            });
        }
    }, [tasks, openEditTaskModal]);

    const setTaskStatusFormat = taskStatus => {
        if(taskStatus === 0){
            return "task isn't completed"
        } else if (taskStatus === 1) {
            return "task isn't completed, edited by admin"
        } else if (taskStatus === 10) {
            return 'task is completed'
        } else if (taskStatus === 11) {
            return 'task is edited by admin and completed'
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <MainWrapper>        
                <MainWrapper.ButtonWrapper>
                    <Link to='/login'>
                        <CustomButton
                            text={isLogged ? 'Log out' : 'Sign in'}
                            height={30}
                            handleEvent={isLogged ? logOut : null}
                        />
                    </Link>
                </MainWrapper.ButtonWrapper>       
                <HeaderModule/>
                <TodoWrapper data-at={'todo-module-container'}>
                    <CustomTable
                        rows={tasks}
                        isLogged={isLogged}
                        sortHandle={sortField}
                        onOpenModal={onOpenModal}
                        columnTitles={columnTitles}
                        setTaskStatusFormat={setTaskStatusFormat}
                        />
                    <CustomPaginator
                        handlePage={handlePage}
                        currentPage={currentPage}
                        pageQuantity={pageQuantity}
                        /> 
                </TodoWrapper>
            </MainWrapper>
        </ThemeProvider>
    );
}

export default React.memo(TodoModule);