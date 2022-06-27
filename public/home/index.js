const tela = window.screen.width


function changeHref (tela) {
    console.clear()
    if(tela > 900 ) {
        let item = document.querySelector("#contatos")
        item.href = ("../contatos/contatos.html")
        
        console.log("Pass")
    }

    if(tela < 900) {
        let item = document.querySelector("#contatos")
        item.href = ("../contatos/cttMbl.html")
    }
    console.log(tela)
}

window.document.addEventListener("resize", changeHref(tela) )