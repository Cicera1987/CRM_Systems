
import React, {Fragment} from 'react'
import Router from './routes/index.js'
import {ToastContainer} from 'react-toastify'
import GlobalStyle from './Style/GlobalStyle.js'
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux';
import store from './redux/store/index.js';


const App = () =>  (
  <Provider store={store}>
  <Fragment>
    <GlobalStyle/>
    <ToastContainer autoClose={3000} />
    <Router/>
  </Fragment>
  </Provider>
  )
export default App
