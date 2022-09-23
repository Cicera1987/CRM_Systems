import React from 'react'
import { ContainerStyle } from '../../atoms/Container'
import Jobs from '../Jobs'
import Status from '../Status'
import { ContainerConfig, ContainerConfig02 } from './style'
import NavBar from '../../molecules/NavBar'
import NavLink from '../../molecules/NavLink/Sidebar'

const Settings = () => {
  return (
    <>
    <NavBar/>
    <NavLink/>
      <ContainerStyle>
        <h1>Configurações</h1>
        <h3>Cadastros</h3>
        <ContainerConfig>
          <Jobs />
          <Status />
        </ContainerConfig>
        <ContainerConfig02>

        </ContainerConfig02>

      </ContainerStyle>
    </>

  )
}

export default Settings