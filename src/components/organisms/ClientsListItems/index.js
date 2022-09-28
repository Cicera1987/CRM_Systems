import React from 'react'
import { useParams } from 'react-router-dom'
import { ContainerStyle } from '../../atoms/Container';
import ClientsList from '../ClientsList/index'


const ListClients = ({ ModelClients }) => {
  const {id} = useParams();

    
  return (
    <ContainerStyle>
      <ClientsList/>
    </ContainerStyle>
    
        )
    }
   

export default ListClients

{/* {id && <div> id: {id}</div>} */ }