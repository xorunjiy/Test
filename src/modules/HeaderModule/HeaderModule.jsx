import React, {useCallback, useState} from 'react';
import { useDispatch } from 'react-redux';
import {
    Wrapper,
    FormWrapper
} from './styledComponents';
import * as actions from './actions';
import {ThemeProvider} from 'styled-components';
import theme from '../themes/colors.js';
import CustomInput from '../components/customInput/CustomInput.jsx';
import CustomButton from '../components/customButton/CustomButton.jsx';


const HeaderModule = () => {
    const dispatch = useDispatch();
    const [taskData, setTaskData] = useState(
        {
            username: '',
            email: '',
            text: ''
        }
    );

    const handleOnChange = useCallback(event => {
        const {name, value} = event.target;
        setTaskData(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }, [setTaskData, taskData])

    const onSaveTask = useCallback(event => {
        event.preventDefault();
        dispatch(actions.addTaskRequest(taskData));
        setTaskData({
            username: '',
            email: '',
            text: ''
        });
    }, [taskData]);

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Wrapper.FormWrapper onSubmit={onSaveTask}>
                    <FormWrapper.InputsWrapper>
                        <CustomInput
                            name='username'
                            width={90}
                            label='Name'
                            value={taskData.username}
                            display='inline'
                            required
                            labelColor={theme.colorFont}
                            handleChange={handleOnChange}
                        />
                        <CustomInput
                            name='email'
                            type='email'
                            label='Email'
                            value={taskData.email}
                            width={90}
                            display='inline'
                            required
                            handleChange={handleOnChange}
                            labelColor={theme.colorFont}
                        />
                        <CustomInput
                            name='text'
                            value={taskData.text}
                            label='Task'
                            width={90}
                            required
                            display='inline'
                            handleChange={handleOnChange}
                            labelColor={theme.colorFont}
                        />
                    </FormWrapper.InputsWrapper>
                    <CustomButton
                        type='submit'
                        text='Add task'
                    />
                </Wrapper.FormWrapper>
            </Wrapper>
        </ThemeProvider>
    )
}

export default React.memo(HeaderModule);