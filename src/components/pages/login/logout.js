import React from 'react'
import { ButtonLogin } from '../../atoms/Bottons/ButtonLogin/style'
import {useDispatch} from 'react-redux'
import { logout } from '../../../redux/reducers/userSlice'
import { Navigate } from 'react-router'
import { StyleLink } from '../../molecules/NavBar/style'

const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(logout())
        
    }
  return (
  <StyleLink to="/login">
    <ButtonLogin onClick={handleLogout}>Logout</ButtonLogin>
  </StyleLink>
  
  )
}

export default Logout