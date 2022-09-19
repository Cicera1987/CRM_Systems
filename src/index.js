import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Server , Model} from 'miragejs';

new Server ({
  models:{
    users: Model,
    taskClients: Model,
    task: Model,

  },

  seeds(server) {
    server.db.loadData({
      taskClients: [{
        name: 'Cliente 01'
      }],

      users: [
        { id: 1, name: "Cica", email: "ccica_25@hotmail.com", password: "123" },
      ]

    })

  },

  routes(){
    this.namespace = 'api'
    this.urlPrefix = 'http://api.crmsystms.com.br'

    
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
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

