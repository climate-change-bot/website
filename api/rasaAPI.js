import axios from 'axios'
const express = require('express')

const app = express()
app.use(express.json())

app.post('/messages', async (req, res) => {
  const response = await axios.post(process.env.RASA_API + '/webhooks/rest/webhook', req.body)
  res.json(response.data)
})

module.exports = app
