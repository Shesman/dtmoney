import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'

import { App } from './App'

createServer({
  models: {
    transaction: Model
  },
  //passar dados de inicializaco do banco de dados
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de WebSite',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-11-16 09:09')
        },

        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-11-17 15:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
