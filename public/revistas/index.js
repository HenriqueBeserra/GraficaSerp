//Muda a página de a cordo com o tamanho da tela, mobile ou pc --> 
//const tela = window.screen.width
function changeHref (tela) {
    console.clear()
    if(tela > 600 ) {
        let item = document.querySelector("#contatos-revistas")
        item.href = ("../contatos/contatos.html")
        
        console.log("Pass")
    }

    if(tela < 600) {
        let item = document.querySelector("#contatos-revistas")
        item.href = ("../contatos/cttMbl.html")
    }
    console.log(tela)
}
// window.document.addEventListener("resize", changeHref(tela) )


// Consulta ao banco de dados -->
const {getImgURL, getEscritor, getRevistas } = require ("../../apiBancodeDados/bdConexão")
async function teste() {

    const bd = await getImgURL()
    console.log(bd)
}

console.clear()
//teste()
