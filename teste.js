
const informação = require('./apiRevistas/bdConexão')


const escritor = async () =>  {
    info =  await informação.getEscritor()
}

escritor()