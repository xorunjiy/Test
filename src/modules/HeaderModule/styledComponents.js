import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 50%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${props => props.theme.pageBackColor};
    box-sizing: border-box;
`;

export const FormWrapper = styled.form`
    height: 90%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
FormWrapper.InputsWrapper = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

Wrapper.FormWrapper = FormWrapper;