
import React, {Fragment} from 'react'
import Router from './routes/index.js'
import {ToastContainer} from 'react-toastify'
import GlobalStyle from './Style/GlobalStyle.js'
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux';
import store, {persistor} from './redux/store/store.js';
import {PersistGate} from 'redux-persist/integration/react'




const App = () =>  (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
  <Fragment>
    <GlobalStyle/>
    <ToastContainer autoClose={3000} />
    <Router/>
  </Fragment>
    </PersistGate>
  </Provider>
  )
export default App
