import React from 'react'

import { ContainerStyle } from '../../atoms/Container'
import NavBar from '../../molecules/NavBar'
import NavLink from '../../molecules/NavLink/Sidebar'

import ProfessionasList from '../../organisms/ProfessionalsList'
import Collaborators from '../Collaborators'
import ModalCoraborators from '../../molecules/models/ModalColaborators'


const Professionals = () => {
  return (
    <>
    <NavBar/>
    <NavLink/>
    <ContainerStyle>
        <ModalCoraborators/>
      <ProfessionasList/>
      <Collaborators/>
    </ContainerStyle>
    </>
      
 
  )
}

export default Professionals