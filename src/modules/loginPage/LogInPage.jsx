import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from './actions';
import { ThemeProvider } from 'styled-components';

import {
    Wrapper,
    ButtonWrapper
} from './styledComponent';
import theme from '../themes/colors.js';
import CustomInput from '../components/customInput/CustomInput.jsx';
import CustomButton from '../components/customButton/CustomButton.jsx';


const LogInPage = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const handleOnChange = useCallback(event => {
        const { name, value} = event.target;
        setUserData(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        });
    },[userData, setUserData]);

    const onSignIn = useCallback( event => {
        event.preventDefault();
        dispatch(actions.signInRequest(userData));
        setUserData({
                username: '',
                password: ''
        })
    }, [userData]);

    return(
        <ThemeProvider theme={theme}>
            <ButtonWrapper>
                <Link to='/'>
                    <CustomButton
                        text='Sign in'
                        height={30}
                    />
                </Link>
            </ButtonWrapper>
            <Wrapper>
                <Wrapper.FormWrapper onSubmit={onSignIn}>
                    <CustomInput
                        name='username'
                        value={userData.username}
                        width={80}
                        label='Login'
                        height={30}
                        required
                        fontSize={25}
                        labelColor={theme.colorFont}
                        handleChange={handleOnChange}
                        inputBackground={theme.colorFont}
                    />
                    <CustomInput 
                        type='password'
                        name='password'
                        value={userData.password}
                        width={80}
                        label='Password'
                        height={30}
                        required
                        fontSize={25}
                        labelColor={theme.colorFont}
                        handleChange={handleOnChange}
                        inputBackground={theme.colorFont}
                    />
                    <CustomButton 
                        type='submit'
                        text='Sing in'
                        height={30}
                    />
                </Wrapper.FormWrapper>
            </Wrapper>
        </ThemeProvider>
    );
}

export default React.memo(LogInPage);