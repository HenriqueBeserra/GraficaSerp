
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('../src/public'));


app.get("/on", (req, res)=> {

  res.json({mensagem:"Site online at /home/index.html"})

})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/home/index.html`)
})