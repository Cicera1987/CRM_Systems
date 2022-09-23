import React from 'react'
import { ButtonLogin } from '../../atoms/Bottons/ButtonLogin/style'
import { ContainerStyle } from '../../atoms/Container'
import ModalCreateClients from '../../molecules/ModalCreateClient'
import ClientsList from '../../organisms/ClientsList'
import ListClients from '../../organisms/ClientsListItems'
import { Link } from 'react-router-dom'
import { StyleLink } from '../../molecules/NavBar/style'
import NavBar from '../../molecules/NavBar'
import NavLink from '../../molecules/NavLink/Sidebar'

const Clients = () => {
  return (
    <>
    <NavBar/>
    <NavLink/>
    <ContainerStyle>
      <StyleLink to="/modalCreateClients">
        <ButtonLogin onSubmit="Submit">Cadastrar novo Cliente</ButtonLogin>
      </StyleLink>
     <ClientsList/>
      <ListClients/>
    </ContainerStyle>
    </>
  )
}

export default Clients