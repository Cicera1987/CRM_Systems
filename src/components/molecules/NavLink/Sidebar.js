import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './style.css';
import { IconContext } from 'react-icons';
import { NavMenuItems, NavBarMenu,MenuBars, NavBarToggle } from './style';


function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: ' #DCDCDC' }}>
                <NavBarMenu>
                    <MenuBars to='#' >
                        <FaIcons.FaBars onClick={showSidebar} />
                    </MenuBars>
                </NavBarMenu>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <NavMenuItems onClick={showSidebar}>
                        <NavBarToggle>
                            <MenuBars to='#'>
                                <AiIcons.AiOutlineClose />
                            </MenuBars>
                        </NavBarToggle>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </NavMenuItems>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;