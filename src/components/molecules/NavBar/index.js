import React, {useState} from 'react'
import { PageNavbar, LinkList, LinkListLi, StyleLink, CardIcon } from './style'



const NavBar = () => {


    return <PageNavbar>
        <StyleLink to="/">
            <StyleLink to="/">SuperSeller</StyleLink>
        </StyleLink>
        
        <LinkList>
            <LinkListLi>
                <CardIcon>
                    <StyleLink to="/">Home</StyleLink>
                </CardIcon>
            </LinkListLi>

            <LinkListLi>
                <CardIcon>
                    <StyleLink to="/login">Login</StyleLink>
                </CardIcon>
            </LinkListLi>
        </LinkList>

    </PageNavbar>
}
export default NavBar