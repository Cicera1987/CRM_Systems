import React from 'react'
import { ContainerStyle } from '../../atoms/Container'
import ModalCreateClients from '../../molecules/ModalCreateClient'
import ClientsList from '../../organisms/ClientsList'
import ListClients from '../../organisms/ClientsListItems'

const Clients = () => {
  return (
    <ContainerStyle>
     <ClientsList/>
      <ListClients/>
     <ModalCreateClients/>
    </ContainerStyle>
  )
}

export default Clients