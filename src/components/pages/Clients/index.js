import React from 'react'
import { ContainerStyle } from '../../atoms/Container'
import ListClients from '../../organisms/ClientsListItems'
import NavBar from '../../molecules/NavBar'
import NavLink from '../../molecules/NavLink/Sidebar'
import ModalClients from '../../molecules/models/ModalClients'

const Clients = () => {
  return (
    <>
      <NavBar />
      <NavLink />
      <ContainerStyle>
        <ModalClients />
        <ListClients />
      </ContainerStyle>
    </>
  )
}

export default Clients