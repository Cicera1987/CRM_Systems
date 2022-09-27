import React from 'react'
import { LisContainer, ListCPF, ListEmail, LisTitle, ListJob, ListName, ListPhoneNumbers, ListStatus } from './style'

const ClientsList = () => {
  return (
    <LisContainer>
        <ListName>
              <LisTitle margin="-50px">Nome</LisTitle>
        </ListName>
        <ListCPF>
              <LisTitle margin="0">CPF</LisTitle>
        </ListCPF>
        <ListEmail>
              <LisTitle margin="0">E-mail</LisTitle>
        </ListEmail>
    </LisContainer>
  )
}

export default ClientsList