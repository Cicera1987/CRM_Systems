import React from 'react'
import { ButtonLogin } from '../../atoms/Bottons/ButtonLogin/style'
import { ContainerStyle } from '../../atoms/Container'
import NavBar from '../../molecules/NavBar'
import NavLink from '../../molecules/NavLink/Sidebar'
import { StyleLink } from '../../molecules/NavBar/style'
import ProfessionasList from '../../organisms/ProfessionalsList'
import Collaborators from '../Collaborators'


const Professionals = () => {
  return (
    <>
    <NavBar/>
    <NavLink/>
    <ContainerStyle>
      <StyleLink to="/modalCreateSeller">
        <ButtonLogin onSubmit="Submit">Cadastrar novo funcionário</ButtonLogin>
      </StyleLink>
      <ProfessionasList/>
      <Collaborators/>
    </ContainerStyle>
    </>
      
 
  )
}

export default Professionals