import styled from "styled-components"
import { Link } from 'react-router-dom'

export const PageNavbar = styled.div`
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px 0px;
    justify-content: space-between;
    align-items: center;
    padding: 0.3em 0.5em;
`
export const StyleLink = styled(Link)`
    text-decoration: none;
    border: none;
    color: black;
    transition: 0.7s;
    font-size: 1em;
    font-family: "Montserrat", sans-seri;
    margin: -0.1em -1.8em;
    margin-right: 1em;
    

&:hover{
    color: #B0C4DE;
}
`

export const LinkList = styled.ul`
    display: flex;
    list-style: none;
  

`
export const LinkListLi = styled.li`
    margin-right: 1em;
    padding: 1em;

`

export const CardIcon = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    
svg {
    cursor: pointer;
    font-size: 1.3rem;


}
`

