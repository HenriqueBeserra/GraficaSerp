//Muda a página de a cordo com o tamanho da tela, mobile ou pc --> 
const tela = window.screen.width
function changeHref (tela) {
    console.clear()
    if(tela > 600 ) {
        let item = document.querySelector("#contatos-revistas");
        item.href = ("../contatos/contatos.html");
        
        console.log("Pass");
    }

    if(tela < 600) {
        let item = document.querySelector("#contatos-revistas");
        let item2 = document.querySelector("#contatosButton");
        item.href = ("../contatos/cttMbl.html");
        item2.href = ("../contatos/cttMbl.html");
    }
    console.log(tela)
}
window.document.addEventListener("resize", changeHref(tela) )


