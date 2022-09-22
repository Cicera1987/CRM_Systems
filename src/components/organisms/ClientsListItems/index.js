import React from 'react'
import { ContainerListItem, ContainerListClientsStyle, ContainerListItemClients } from './style'

const ListClients = (data) => {

    if(!data){
  return (
    <ContainerListClientsStyle>
          <ContainerListItemClients>
                  Loading...
          </ContainerListItemClients>
    </ContainerListClientsStyle>
    
  )
    }
    if (!data.length) {
        return (
            <ContainerListClientsStyle>
            <ContainerListItemClients>
                    Nenhum cliente encontrado...
            </ContainerListItemClients>
            </ContainerListClientsStyle>
        )
    }
    return(
        <ContainerListItem>
            
        </ContainerListItem>
    )

}

export default ListClients