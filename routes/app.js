
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002




app.use(express.static('../src/public'));

app.get("/on", (req, res)=> {

  res.json({mensagem:`Site online at http://localhost:${PORT}/home/index.html`})

})



app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}/home/index.html`)
})