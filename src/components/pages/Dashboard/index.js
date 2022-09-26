import React from 'react'
import { ContainerStyle } from '../../atoms/Container'
import NavBar from '../../molecules/NavBar'
import NavLink from '../../molecules/NavLink/Sidebar'



const Dashboard = () => {
  return (
    <>
      <NavBar />
      <NavLink />
      <ContainerStyle>
        <h3>Painel de controle</h3>

      </ContainerStyle>

    </>
  )
}

export default Dashboard