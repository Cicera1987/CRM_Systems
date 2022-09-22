import React, {useState} from 'react'
import { PageNavbar, LinkList, LinkListLi, StyleLink, CardIcon } from './style'
import { FaHome } from 'react-icons/fa'
import {MdAccountCircle} from'react-icons/md'
import { BsFillArrowLeftCircleFill } from "react-icons/bs"



const NavBar = () => {


    return <PageNavbar>
        <StyleLink to="/logout"><BsFillArrowLeftCircleFill/></StyleLink>
  
        <LinkList>
            <LinkListLi>
                <CardIcon>
                    <StyleLink to="/home"><FaHome/></StyleLink>
                </CardIcon>
            </LinkListLi>

            <LinkListLi>
                <CardIcon>
                    <StyleLink to="/"><MdAccountCircle /></StyleLink>
                </CardIcon>
            </LinkListLi>
           
        </LinkList>

    </PageNavbar>
}
export default NavBar