import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: ${props => props.theme.pageBackColor};
`;

export const TodoWrapper = styled.div`
    width: 90%;
    height: 40%;
    background: white;
    padding: 10px;
    box-sizing: border-box;
`;
MainWrapper.ButtonWrapper = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
`;

MainWrapper.TodoWrapper = TodoWrapper;