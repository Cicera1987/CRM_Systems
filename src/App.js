
import React, {Fragment} from 'react'
import Router from './routes/index.js'
import {ToastContainer} from 'react-toastify'
import GlobalStyle from './Style/GlobalStyle.js'
import 'react-toastify/dist/ReactToastify.min.css';


const App = () =>  (
  <Fragment>
    <GlobalStyle/>
    <ToastContainer autoClose={3000} />
    <Router/>
  </Fragment>
  )
export default App
