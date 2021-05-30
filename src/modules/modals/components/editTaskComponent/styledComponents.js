import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Wrapper.FormWrapper = styled.form`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    position: relative;
    background: ${props => props.theme.pageBackColor};
;
`;

Wrapper.exitBtn = styled.button`
  font-size: 20px;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;