import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import Footer from '../components/organisms/Footer/index'
import Home from '../components/pages/Home/Home'
import Login from '../components/pages/login/Login'
import NavBar from '../components/molecules/NavBar/index';
import NavLink from '../components/molecules/NavLink/Sidebar';
import Clients from '../components/pages/Clients/index'
import Collaborators from '../components/pages/Collaborators/index'
import Settings from '../components/pages/settings/index'
import Professionals from '../components/pages/Professionals'
import Logout from '../components/pages/login/logout'

const Router = () => {
  return (
      
          <BrowserRouter>
              <NavBar />
              <NavLink />
              <div className='Container'>
                  <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/login' element={<Login />} />
                      <Route path='/logout' element={<Logout/>}/>
                      <Route path='/clients' exact element={<Clients />} />
                      <Route path='/settings' exact element={<Settings />} />
                  <Route path='/professionals' exact element={<Professionals />} />
                  </Routes> 
          </div> 
              <Footer />
          </BrowserRouter>
     
  )
}

export default Router