import React, { useState } from 'react'
import { PageNavbar, LinkList, LinkListLi, StyleLink, CardIcon } from './style'
import { FaHome } from 'react-icons/fa'
import { MdAccountCircle, MdPersonAddAlt1 } from 'react-icons/md'
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { useSelector } from 'react-redux/es/exports'



const NavBar = () => {
    const users = useSelector(state => state.users)


    return <PageNavbar>
        <StyleLink to="/logout"><BsFillArrowLeftCircleFill /></StyleLink>
        <LinkList>
            <LinkListLi>
                <CardIcon>
                    <StyleLink to="/home"><FaHome /></StyleLink>
                </CardIcon>
            </LinkListLi>
            <LinkListLi>       
                <CardIcon>
                    <StyleLink to="/"><MdPersonAddAlt1 />{users ? 'Logado' : 'Fazer Login'}</StyleLink>   
                </CardIcon>           
            </LinkListLi>   
        </LinkList>
    </PageNavbar>
}
export default NavBar