
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('../public'));

app.get("/teste", (req, res)=> {

  res.json({mensagem:"Site online"})

})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/home/index.html`)
})