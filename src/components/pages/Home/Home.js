import React from 'react'
import { ContainerStyle } from '../../atoms/Container'
import NavBar from '../../molecules/NavBar'
import NavLink from '../../molecules/NavLink/Sidebar'

const Home = () => {
  return (
    <>
    <NavBar/>
    <NavLink/>
    <ContainerStyle>
        <h1>Home</h1>
    </ContainerStyle>
      </>
  )
}

export default Home