const express = require("express");
const app = express();
const PORT = process.env.PORT ||3333;


//rotas
const rotas = require("./routes/rotas");

app.use("/app", rotas);

//servidor
app.listen(PORT, ()=> {console.log(`APP Online: http://localhost:${PORT}`)});