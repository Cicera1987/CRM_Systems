import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import Home from './components/pages/Home/Home'
import Login from './components/pages/login/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
