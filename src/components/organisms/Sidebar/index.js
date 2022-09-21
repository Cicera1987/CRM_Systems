import React from 'react'


import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'
import { Container, Content } from './style'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem  Icon={FaHome}  index="Home" />
        <SidebarItem Icon={FaChartBar} index="Statistics" />
        <SidebarItem Icon={FaUserAlt} index="Users" />
        <SidebarItem Icon={FaEnvelope} index="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} index="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} index="Employees" />
        <SidebarItem Icon={FaRegFileAlt} index="Reports" />
        <SidebarItem Icon={FaRegSun} index="Settings" />
      </Content>
    </Container>
  )
}

export default Sidebar