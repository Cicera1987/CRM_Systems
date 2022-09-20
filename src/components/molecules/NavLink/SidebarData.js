import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {FaTimes} from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaRegSun } from 'react-icons/fa';
import { FaIdCardAlt } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaChartBar }  from 'react-icons/fa';
import { FaRegFileAlt } from 'react-icons/fa';
import { BiGroup } from "react-icons/bi";
import { FiUsers } from "react-icons/fi"



export const SidebarData = [
    {
        title: 'Clientes',
        path: "/Clients",
        icon: <FiUsers />,
        cName: 'nav-text'
    },

    {
        title: 'Sócios',
        path: "/partners",
        icon: <FaUserAlt />,
        cName: 'nav-text'

    },

    {
        title: 'Colaboradores',
        path: "/Collaborators",
        icon: <FaIdCardAlt />,
        cName: 'nav-text'
    },
    {
        title: 'dashboard',
        path: "/dashboard",
        icon: <FaChartBar/>,
        cName: 'nav-text'
     
    },
    {
        title: 'Configuração',
        path: "/Settings",
        icon: <FaRegSun />,
        cName: 'nav-text'
    },

    
    

]

export default SidebarData;