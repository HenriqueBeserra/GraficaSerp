// const tela = window.screen.width
const {getImgURL, getEscritor, getRevistas } = require ("../../apiBancodeDados/bdConexão")



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
async function teste() {

    const bd = await getImgURL()
    console.log(bd.length)
}
console.clear()
teste()
