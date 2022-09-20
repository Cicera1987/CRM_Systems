import React, {useState} from 'react'
import { PageNavbar, LinkList, LinkListLi, StyleLink, CardIcon } from './style'
import { FaHome } from 'react-icons/fa'
import {MdAccountCircle} from'react-icons/md'



const NavBar = () => {


    return <PageNavbar>
        <StyleLink to="/">
            <StyleLink to="/">SuperSeller</StyleLink>
        </StyleLink>
        
        <LinkList>
            <LinkListLi>
                <CardIcon>
                    <StyleLink to="/"><FaHome/></StyleLink>
                </CardIcon>
            </LinkListLi>

            <LinkListLi>
                <CardIcon>
                    <StyleLink to="/login"><MdAccountCircle />.</StyleLink>
                </CardIcon>
            </LinkListLi>
        </LinkList>

    </PageNavbar>
}
export default NavBar