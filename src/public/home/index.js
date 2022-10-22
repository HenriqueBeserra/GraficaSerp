const tela = window.screen.width


function changeHref (tela) {
    console.clear()
    if(tela > 900 ) {
        let item = document.querySelector("#contatos")
        item.href = ("../contatos/contatos.html")
        
        console.log("Pass")
    }

    if(tela < 900) {
        let item = document.querySelector("#contatos");
        let item2 = document.querySelector("#contatosButton");
        let item3 = document.querySelector("#Chamado");
        item.href = ("../contatos/cttMbl.html");
        item2.href = ("../contatos/cttMbl.html");
        item3.innerHTML = "";
    }
    console.log(tela)
}

window.document.addEventListener("resize", changeHref(tela) )