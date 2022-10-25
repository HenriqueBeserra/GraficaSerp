import fetch from "node-fetch"

const urlProdutos = "https://apis-erp.vercel.app/app/revistas";
const urlImg = "https://apis-erp.vercel.app/app/img";
const ulrEscritor = "https://apis-erp.vercel.app/app/escritor";



fetch(ulrEscritor)
.then( async response => {
    let poke = await response.json();
    console.log(poke)
});