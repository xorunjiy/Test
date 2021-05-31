import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 40%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.pageBackColor};
`;
Wrapper.FormWrapper = styled.form`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const ButtonWrapper = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
`;
