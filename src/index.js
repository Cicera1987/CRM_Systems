import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Server , Model} from 'miragejs';
import store from './redux/store/store';
import {Provider} from 'react-redux'


new Server ({
  models:{
    users: Model,
    taskClients: Model,
    delete: Model,
    task: Model,
    

  },

  seeds(server) {
    server.db.loadData({
      taskClients: [{
        name: 'Cliente 01'
      }],

      users: [
        { id: 1, name:"Analista",  username: "Adm",password: "2030" },
        { id: 2, name: "Cicera_Vendedora", username: "Cicera", password: "0123" },
      ]

    })

  },

  routes(){
    this.namespace = 'api'
    this.urlPrefix = 'http://api.desafioubis2022.com.br'

    
    this.get('/taskClients',async (schema)=> {
      return{
        taskClients: (await schema.taskClients.all()).models,
      } 

    })

    this.post('/taskClients', async (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return {
        task: (await schema.taskClients.create({name: data.task})).attrs
      }
    })
    this.post("/users", (schema, request) => {
      const user = schema.db.users.findBy({ username: JSON.parse(request.requestBody).username })
      if (!user) {
        return new Response(400, { some: 'header' }, { errors: 'Usuario não existe' });
      }
      if (user.password !== JSON.parse(request.requestBody).password) {
        return new Response(400, { some: 'header' }, { errors: 'Login ou senha invalida' });
      }
      return { message: 'Login com sucesso!', users: user.name }

    })

    this.del('/delete/:id', (schema, request) => {
      let id = request.params.id
      schema.db.tasks.remove(id)
      return { message: 'Item removido' }
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
      <App /> 
  </Provider> 

);

