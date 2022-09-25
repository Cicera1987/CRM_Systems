import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Login from '../components/pages/Login/Login'
import Clients from '../components/pages/Clients/index'
import Settings from '../components/pages/settings/index'
import Professionals from '../components/pages/Professionals'
import Logout from '../components/pages/Login/logout'
import Dashboard from '../components/pages/Dashboard'
import ModalClients from '../components/molecules/models/ModalClients'
import ModalCoraborators from '../components/molecules/models/ModalColaborators'
import Jobs from '../components/pages/Jobs'



const Router = () => {

    return (

        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/clients' exact element={<Clients />} />
                    <Route path='/settings' exact element={<Settings />} />
                    <Route path='/dashboard' exact element={<Dashboard/>}/>
                    <Route path='/professionals' exact element={<Professionals />} />
                    <Route path='/modalColaborators' element={<ModalCoraborators />} />
                    <Route path='/modalclients' element={<ModalClients/>}/>
                    <Route path='/jobs' element={<Jobs/>}/>
                </Routes>
        </BrowserRouter>

    )
}

export default Router