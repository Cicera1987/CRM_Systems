import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Server , Model} from 'miragejs';



new Server ({
  models:{
    users: Model,
    taskClients: Model,
    delete: Model,
    createClients: Model,
    clients: Model,
    birthDate: Model,
    cpf: Model,
    rg: Model,
    telephoneNumber: Model,
    email: Model,
    cep: Model,
    number: Model,
    complement: Model,
    endereco: Model,


    

  },

  seeds(server) {
    server.db.loadData({
      createClients: [{
        name: " Cliente 01"
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

    
    this.get('/createClients',async (schema)=> {
      return{
        createClients: (await schema.createClients.all()).models,
      } 

    })

    this.post('/createClients', async (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return {
        clients: (await schema.createClients.create({ name: data.clients })).attrs,
        birthDate: (await schema.createClients.create({ name: data.birthDate })).attrs,
        cpf: (await schema.createClients.create({ name: data.cpf })).attrs,
        rg: (await schema.createClients.create({ name: data.rg })).attrs,
        telephoneNumber: (await schema.createClients.create({ name: data.telephoneNumber })).attrs,
        email: (await schema.createClients.create({ name: data.email })).attrs,
        cep: (await schema.createClients.create({ name: data.cep })).attrs,
        number: (await schema.createClients.create({ name: data.number })).attrs,
        complement: (await schema.createClients.create({ name: data.complement })).attrs,
        endereco: (await schema.createClients.create({ name: data.endereco })).attrs,
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
      <App /> 
);

