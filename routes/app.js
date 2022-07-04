
const express = require('express')
const app = express()
<<<<<<< HEAD:src/routes/index.js
const PORT = process.env.PORT || 3000


=======
const port = 3001;
>>>>>>> Desenvolvimento:routes/app.js

app.use(express.static('../src/public'));

app.get("/on", (req, res)=> {

  res.json({mensagem:"Site online at /home/index.html"})

})



app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}/home/index.html`)
})