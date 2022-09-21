import React from 'react'
import { ButtonLogin } from '../../atoms/Bottons/ButtonLogin/style'
import {useDispatch} from 'react-redux'
import { logout } from '../../../redux/userSlice'

const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(logout())
    }
  return (
    <div>
    <ButtonLogin onClick={handleLogout}>Logout</ButtonLogin>
    </div>
  )
}

export default Logout