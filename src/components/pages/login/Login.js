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
  const [users, setUsers] = useState(null)
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
      if (typeof window == !undefined)
      if (typeof window == !null)
      if (!users) {
        return toast.error("Usuario ou login não existe")
      } else {
        toast.success("Login efetuado com sucesso!")
      }

    dispatch(usersLogin.usersLogin())
    const data = { username, password }
    let tempList = users
      localStorage.setItem("users", JSON.stringify(tempList))
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
            value={username}
          />
        </ContainerRow>
        <ContainerRow>
          <InputWithLabel
            type='password'
            label='Senha'
            name='password'
            required       
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </ContainerRow>

        <ButtonLogin onClick={handleSubmit}>Login</ButtonLogin>
        </FormLogin>
    </ContainerStyle>
    </>
  )
}

export default Login