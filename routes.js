
const express = require('express')
const app = express()
const port = 3000

app.get('/homepage', (req, res) => {
  res.sendFile(__dirname + '/src/home/index.html')
})

app.get("/pedidos", (req, res) => {
    res.sendFile(__dirname + '/src/pedidos/pedidos.html')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}/homepage`)
})