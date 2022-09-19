import React from 'react'
import { PageNavbar, LinkList, LinkListLi, StyleLink, CardIcon } from './style'


const NavBar = () => {
    return <PageNavbar>
            <StyleLink to="/">Home</StyleLink>
        <LinkList>
            <LinkListLi>
                <CardIcon>
                    <StyleLink to="/">Sobre</StyleLink>
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