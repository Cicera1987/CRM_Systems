import React,{useState, useEffect} from 'react'
import { ContainerStyle } from '../../atoms/Container'
import InputWithLabel from '../../atoms/InputWithLabel'
import { FormLogin } from './style'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BsFillPersonFill } from "react-icons/bs";
import { ButtonLogin } from '../../atoms/Bottons/ButtonLogin/style';
import { changeUser } from '../../../redux/userSlice';
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'




const http = axios.create({
  baseURL: "http://api.crmsystms.com.br"
})

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(null)
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    toast.success("Login efetuado com sucesso!")
    dispatch(changeUser(username, password))
    const data = { username, password }
    let tempList = users
    localStorage.setItem("users", JSON.stringify(tempList))
    http.post('/api/users', data).then(res => {
      setUsers(res.data.users)
    }).catch(err => setErr(err))
    setUserName('')
  }
  useEffect(() => {
    if (users) {
      navigate("/login")
    }
  }, [users])

  return (
    <ContainerStyle>
        <FormLogin>
        <div><BsFillPersonFill/></div>
        <span>Login</span>
          <InputWithLabel>
          <input 
            type="text"
            name="username"
            label="Login"
            value={username}
            onChenge={(e) => setUserName(e.target.value)}
          />
        </InputWithLabel>
        <span>Senha</span>
          <InputWithLabel>
          <input 
            type="text"
            label="Senha"
            name="password"
            value={password}
            onChenge={(e) => setPassword(e.target.value)}
          />
        </InputWithLabel>
        <ButtonLogin onClick={handleSubmit}>Login</ButtonLogin>
        </FormLogin>
    </ContainerStyle>
  )
}

export default Login