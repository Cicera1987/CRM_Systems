import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import Home from './components/pages/Home/Home'
import Login from './components/pages/login/Login'
import NavBar from './components/molecules/NavBar';
import NavLink from './components/molecules/NavLink/Sidebar';
import Clients from './components/pages/Clients/index'
import Collaborators from './components/pages/Collaborators/index'
import Settings from './components/pages/settings/index'


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <NavLink />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/clients' exact element={<Clients />} />
            <Route path='/settings' exact element={<Settings />} />
            <Route path='/colaborators' exact element={<Collaborators />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
