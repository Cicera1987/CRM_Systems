import styled, {createGlobalStyle} from "styled-components";
import 'react-toastify/dist/ReactToastify.css';


export const GlobalStyle =  styled.div`

display: flex;
width: 100%;
height: 100%;
`;
export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  width: 100vw;
  height: 60vw;
  background-color:#E0FFFF;
  font-family: "Montserrat", sans-serif;
}
`;
