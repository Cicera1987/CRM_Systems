import React from 'react'
import { ContainerStyle } from '../../atoms/Container'
import ModalCreateClients from '../../molecules/ModalCreateClient'
import ClientsList from '../../organisms/ClientsList'

const Clients = () => {
  return (
    <ContainerStyle>
     <ClientsList/>
     <ModalCreateClients/>
    </ContainerStyle>
  )
}

export default Clients