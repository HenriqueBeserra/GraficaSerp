
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000



app.use(express.static('../public'));

app.get("/on", (req, res)=> {

  res.json({mensagem:"Site online at /home/index.html"})

})



app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}/home/index.html`)
})