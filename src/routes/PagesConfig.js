import React from 'react';

import { FaTimes, FaUserAlt, FaEnvelope, FaRegSun, FaIdCardAlt, FaRegCalendarAlt, FaChartBar, FaRegFileAlt } from 'react-icons/fa';
import { BiGroup, BiHome } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import path from 'path';


export const templates = [{
    id:1,
    name: 'Inicio',
    hasButton:true,
    buttonText: "Pagina Inicial",
    buttonPath: "/home",
    icon:<BiHome/>,
    isRegisterPage:false,
    path:"/Home"
},

]