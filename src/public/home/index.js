const tela = window.screen.width

window.alert("Site em construção, ao final da sua jornada encaminhe-se para página de contatos e nos deixe sua opinião. Obrigado pela visita!")

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
        item.href = ("../contatos/cttMbl.html");
        item2.href = ("../contatos/cttMbl.html");
        
    }
    console.log(tela)
}

window.document.addEventListener("resize", changeHref(tela) )