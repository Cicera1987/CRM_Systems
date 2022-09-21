import styled from "styled-components"
import { Link } from 'react-router-dom'

export const PageNavbar = styled.div`
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
    justify-content: space-between;
    align-items: center;
    padding: 0.3em 2em;
`
export const StyleLink = styled(Link)`
    text-decoration: none;
    border: none;
    color: black;
    transition: 0.7s;
    font-size: 1em;
    font-family: "Montserrat", sans-seri;

&:hover{
    color: #B0C4DE;
}
`

export const LinkList = styled.ul`
    display: flex;
    list-style: none;

`
export const LinkListLi = styled.li`
    margin-right: 4em;
    padding: 1.5em;

`

export const CardIcon = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    margin: 0 30px;
    
svg {
    cursor: pointer;
    font-size: 3rem;


}
`
export const NavText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
}

`
