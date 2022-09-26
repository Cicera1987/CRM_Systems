import React,{useState, useEffect} from 'react'
import { ContainerStyle } from '../../atoms/Container'
import InputWithLabel from '../../atoms/InputWithLabel'
import { ContainerHeader, FormLogin } from './style'
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { ButtonLogin } from '../../atoms/Bottons/ButtonLogin/style';
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { ContainerRow } from '../../molecules/models/ModalClients/style';
import axios from '../../../services/axios';
import * as usersLogin from '../../../redux/actions/Users'


const Login = () => {
 

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState()
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(usersLogin.usersLoginRequest())
    
    const data = { username, password }
    if (!data) {
      toast.error("Usuario ou login não existe")
    } else {
      toast.success("Login efetuado com sucesso!")
    }
    let users = data
      localStorage.setItem("users", JSON.stringify(users))
      axios.post('/api/users', data).then(res => {
        setUsers(res.data.users)

    })

    .catch(err => setErr(err))
    setUserName('')
    setPassword('')
  }
  useEffect(() => {
    if (users) {
      navigate("/dashboard")
    }
  }, [users])



  return (
    <>
<ContainerHeader/>
    <ContainerStyle>
        <FormLogin>
        <div><BsFillPersonFill/></div>
        <ContainerRow>
          <InputWithLabel  
            type='username'
            name='username'
            label='Login'
            required    
            onChange={(e) => setUserName(e.target.value)}
            value={users?.username}
          />
        </ContainerRow>
        <ContainerRow>
          <InputWithLabel
            type='password'
            label='Senha'
            name='password'
            required       
            onChange={(e) => setPassword(e.target.value)}
            value={users?.password}
          />
        </ContainerRow>

        <ButtonLogin onClick={handleSubmit}>Login</ButtonLogin>
        </FormLogin>
    </ContainerStyle>
    </>
  )
}

export default Login