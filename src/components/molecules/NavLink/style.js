import styled from 'styled-components'; 
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #8B008B;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;

export const NavMenuItems = styled.div`
  width: 100%;

`
export const NavBarMenu = styled.div`
    width: 20%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const MenuBars = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
`
export const NavMenu = styled.div`
    background-color: #778899;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;

    &:NavMenu:active{
          left: 0;
          transition: 350ms;
    }

`
export const NavBarToggle = styled.li`
    background-color:#778899;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`