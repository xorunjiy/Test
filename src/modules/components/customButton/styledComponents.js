import styled from 'styled-components';

export const Button = styled.button`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    font-size: ${props => props.fontSize}px;
    background: ${props => props.buttonBackground};
    outline: none;
    border: none;
    cursor: pointer;
    color: ${props => props.theme.colorFont};
    :hover {
        background-color: ${props => props.theme.pageBackColor};
        cursor: pointer;
        border: 2px solid  ${props => props.theme.buttonBorderColor};
    }
`;
