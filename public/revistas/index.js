const tela = window.screen.width


function changeHref (tela) {
    console.clear()
    if(tela > 600 ) {
        let item = document.querySelector("#contatos-revistas")
        item.href = ("../contatos/contatos.html")
        
        console.log("Pass")
    }

    if(tela < 600) {
        let item = document.querySelector("#contatos-revistas")
        item.href = ("../home/index.html")
    }
    console.log(tela)
}

window.document.addEventListener("resize", changeHref(tela) )