import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ContainerStyle } from '../../atoms/Container'
import {toast} from 'react-toastify'

const http = axios.create({
  baseURL: "http://api.crmsystms.com.br"
})

const Home = () => {
  const [taskClients, setTaskClients] = useState([])
  const [task, updateTask] = useState()

  useEffect(() => {
    http.get('/api/taskClients')
      .then(res => setTaskClients(res.data.taskClients))

  },[])

  const handleAddClient = e => {
    e.preventDefault()
    
    if(task.trim()){
      http.post('/api/taskClients', {task})
      .then(res => {
        setTaskClients(oldTasks => [...oldTasks, res.data.task])
        toast.success("Dado criado com sucesso!")
        updateTask('')
      })
    }
  }


  return (
    <ContainerStyle>
      <h1>Home</h1>
      <form onSubmit={handleAddClient}>
        <input onChange={e => updateTask(e.target.value)} value={task}/>
        <button>Criar</button>
      </form>
      <ul>
        {taskClients.map(texto => <li key={texto.id}>{texto.name}</li>)}
      </ul>
    </ContainerStyle>
  );
}

export default Home