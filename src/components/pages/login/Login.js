import React,{useState, useEffect} from 'react'
import { ContainerStyle } from '../../atoms/Container'
import InputWithLabel from '../../atoms/InputWithLabel'
import { FormLogin } from './style'
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { ButtonLogin } from '../../atoms/Bottons/ButtonLogin/style';
import { changeUser } from '../../../redux/reducers/userSlice'
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { ContainerRow } from '../../molecules/ModalCreateClient/style';
import axios from '../../../services/axios';

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
    dispatch({
      type: "USERS",
      payload:{username, password}
    })
    const data = { username, password }
    let tempList = users
    if(typeof window !== 'undefined')
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
      navigate("/login")
    }
  }, [users])

  return (
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
  )
}

export default Login