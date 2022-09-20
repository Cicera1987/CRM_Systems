import React from 'react'
import { LisContainer, ListCPF, ListEmail, LisTitle, ListJob, ListName, ListPhoneNumbers, ListStatus } from './style'

const ProfessionasList = () => {
  return (
    <LisContainer>
        <ListName>
              <LisTitle margin="-50px">Nome</LisTitle>
        </ListName>
        <ListCPF>
              <LisTitle margin="0">CPF</LisTitle>
        </ListCPF>
        <ListJob>
              <LisTitle margin="0">Cargo</LisTitle>
        </ListJob>
        <ListEmail>
              <LisTitle margin="0">Email</LisTitle>
        </ListEmail>
        <ListPhoneNumbers>
              <LisTitle margin="0">Telefone</LisTitle>
        </ListPhoneNumbers>
        <ListStatus>
              <LisTitle margin="0">Status</LisTitle>
        </ListStatus>

    </LisContainer>
  )
}

export default ProfessionasList