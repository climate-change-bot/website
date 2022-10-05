const express = require('express');
import axios from "axios"

const app = express();
app.use(express.json());

app.post('/messages', async (req, res) => {
  let response = await axios.post("http://localhost:5005/webhooks/rest/webhook", req.body)
  res.json(response.data);
});

module.exports = app
