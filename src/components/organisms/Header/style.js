import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 15%;
  display: flex;
  background-color: #8B008B; 
  box-shadow: 0 0 20px 5px;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;