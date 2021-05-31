import React, {useCallback, useState} from 'react';
import { Wrapper } from './styledComponents';
import CustomInput from '../../../components/customInput/CustomInput.jsx';
import CustomButton from '../../../components/customButton/CustomButton.jsx';
import { ThemeProvider } from 'styled-components';
import theme from '../../../themes/colors';
import { getTokenFromLS } from "../../../../utils/logicLS";

const EditTaskComponent = props => {
    const {
        onClose,
        modalData,
        editTaskRequest,
    } = props;

    const isTaskChecked = (modalData.data.taskStatus ===  "task isn't completed") 
    || (modalData.data.taskStatus === "task isn't completed, edited by admin");
    
    const [taskText, setTaskText] = useState(modalData.data.taskText);
    const [isTaskDone, setIsTaskDone] = useState(isTaskChecked);

    const getInputValue = useCallback(event => {
        setTaskText(event.target.value);
    }, [setTaskText]);

    const getCheckboxStatus = useCallback( event => {
        setIsTaskDone(event.target.checked)
    }, [setIsTaskDone]);

    const onSubmit = () => {
        let taskStatus = 0;
        
        if((modalData.data.taskText === taskText) && isTaskDone){
            taskStatus = 10;
        } else if (!(modalData.data.taskText === taskText) && isTaskDone){
            taskStatus = 11;
        } else if (!(modalData.data.taskText === taskText) && !isTaskDone){
            taskStatus = 1;
        }

        const newTaskData = {
            id: modalData.data.taskId,
            token: getTokenFromLS(),
            text: taskText,
            status: taskStatus
        }

        editTaskRequest(newTaskData);
        onClose();
    }

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Wrapper.exitButton
                    data-at='wrapper_exitBtn'
                    onClick={onClose}
                    children='X'
                />
                <Wrapper.FormWrapper onSubmit={onSubmit}>
                    <CustomInput
                        name='task-text'
                        width={70}
                        value={taskText}
                        label='Task text'
                        height={30}
                        fontSize={25}
                        labelColor={theme.colorFont}
                        handleChange={getInputValue}
                        inputBackground={theme.colorFont}
                    />
                    <CustomInput 
                        type='checkbox'
                        label='Task status'
                        checked={isTaskDone}
                        fontSize={25}
                        labelColor={theme.colorFont}
                        handleChange={getCheckboxStatus}
                        inputBackground={theme.colorFont}
                    />
                    <CustomButton 
                        type='submit'
                        text='Save'
                        height={30}
                    />
                </Wrapper.FormWrapper>
            </Wrapper>
        </ThemeProvider>
    );
}

export default React.memo(EditTaskComponent);