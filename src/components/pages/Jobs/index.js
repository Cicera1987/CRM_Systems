import React from 'react'
import { ContainerStyle } from '../../atoms/Container'
import NavBar from '../../molecules/NavBar'
import NavLink from '../../molecules/NavLink/Sidebar'
import ModalUsers from '../../molecules/models/ModalUsers/ModalUsers'

const Jobs = () => {
  return (
    <>
    <NavBar/>
    <NavLink/>
    <ContainerStyle>
      <ModalUsers/>
       
    </ContainerStyle>
    </>
  )
}

export default Jobs