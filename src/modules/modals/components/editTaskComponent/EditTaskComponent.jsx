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
                <Wrapper.exitBtn 
                    data-at='wrapper_exitBtn'
                    children='X'
                    onClick={onClose}
                />
                <Wrapper.FormWrapper onSubmit={onSubmit}>
                    <CustomInput
                        width={70}
                        value={taskText}
                        name='task-text'
                        label='Task text'
                        fontSize={25}
                        height={30}
                        inputBackground={theme.colorFont}
                        labelColor={theme.colorFont}
                        handleChange={getInputValue}
                    />
                    <CustomInput 
                        type='checkbox'
                        checked={isTaskDone}
                        label='Task status'
                        labelColor={theme.colorFont}
                        fontSize={25}
                        inputBackground={theme.colorFont}  
                        handleChange={getCheckboxStatus} 
                    />
                    <CustomButton 
                        type='submit'
                        height={30}
                        text='Save'
                    />
                </Wrapper.FormWrapper>
            </Wrapper>
        </ThemeProvider>
    );
}

export default React.memo(EditTaskComponent);