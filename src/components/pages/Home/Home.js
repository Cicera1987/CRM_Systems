import React, { useEffect, useState } from 'react'

import { ContainerStyle } from '../../atoms/Container'
import {toast} from 'react-toastify'
import axios from '../../../services/axios'



const Home = () => {
  const [taskClients, setTaskClients] = useState([])
  const [task, updateTask] = useState()
  const [del, setDel] = useState(false)

  useEffect(() => {
    axios.get('/api/taskClients')
      .then(res => setTaskClients(res.data.taskClients))

  },[])

  const handleAddClient = e => {
    e.preventDefault()
    
    if(task.trim()){
      axios.post('/api/taskClients', {task})
      .then(res => {
        setTaskClients(oldTasks => [...oldTasks, res.data.task])
        toast.success("Dado criado com sucesso!")
        updateTask('')
      })
    }
  }

  const deleteTask = (index) => {
    let tempList = taskClients
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskClients(tempList)
    axios.delete(`/api/delete/${index}`, {
      method: 'DELETE',
    }).then(() => {
      setDel(!del)
    });

  }

  return (
    <ContainerStyle>
      {/* <PagesTemplate/> */}
      <h1>Home</h1>
      <form onSubmit={handleAddClient}>
        <input onChange={e => updateTask(e.target.value)} value={task}/>
        <button>Criar</button>
      </form>
      <ul>
        {taskClients.map(texto => <li key={texto.id} deleteTask={deleteTask}>{texto.name}</li>)}
      </ul>
    </ContainerStyle>
  );
}

export default Home