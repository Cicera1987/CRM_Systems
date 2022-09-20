import React from 'react'
import { Container } from './style'


const SidebarItem = ({ Icon, index }) => {
    return (
        <Container>
            <Icon />
            {index}
        </Container>
    )
}

export default SidebarItem