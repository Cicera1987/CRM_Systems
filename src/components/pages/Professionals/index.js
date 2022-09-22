import React from 'react'
import { ContainerStyle } from '../../atoms/Container'
import ProfessionasList from '../../organisms/ProfessionalsList'
import Collaborators from '../Collaborators'


const Professionals = () => {
  return (
    <ContainerStyle>
      <ProfessionasList/>
      <Collaborators/>
    </ContainerStyle>
      
 
  )
}

export default Professionals