const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({ message: 'hello world' })
})

app.listen('7777')