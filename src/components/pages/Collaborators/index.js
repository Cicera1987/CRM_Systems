import React from 'react'
import { ContainerListColaboratorsStyle, ContainerListItemColaborators } from './style'

const Collaborators = ({data}) => {
  if (!data) {

    return (
      <ContainerListColaboratorsStyle>
        <ContainerListItemColaborators>
          Loading...
        </ContainerListItemColaborators>
      </ContainerListColaboratorsStyle>

    )
  }
  
  if (!data.length) {
    return (
      <ContainerListColaboratorsStyle>
        <ContainerListItemColaborators>

          Nenhum colaborador encontrado...
          
        </ContainerListItemColaborators>
      </ContainerListColaboratorsStyle>
    )
  }

  return (
    <ContainerListColaboratorsStyle>

    </ContainerListColaboratorsStyle>
  )

}

export default Collaborators