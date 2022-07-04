const express = require("express");
const app = express();
const port = 3333;


//rotas
const rotas = require("./routes/rotas");

app.use("/app", rotas);

//servidor
app.listen(port, ()=> {console.log("APP Online: http://localhost:3333")});