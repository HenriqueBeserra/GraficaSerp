
//import fetch from "node-fetch"

const urlProdutos = "https://apis-erp.vercel.app/app/revistas";
const urlImg = "https://apis-erp.vercel.app/app/img";
const ulrEscritor = "https://apis-erp.vercel.app/app/escritor";

const box = document.querySelector(".produtos")




async function getEscritor(id){

    fetch(ulrEscritor)
    .then( async response => {
        
        return await response.json();

    })
    .then( async data => {

        
        console.log(data)

    })

    
}

async function getProdutos(id){

    fetch(urlProdutos)
    .then( async response => {
        
        return await response.json() ;
    })
    .then( async data => {
        
        
        console.log(data)
        
    })

    
}


//Renderiza as imagens na tela
async function getImage(id){
    
    fetch(urlImg)
    .then( async response => {
        
       return await response.json();

    })
    .then( async data => {
        
        let teste = await data
        
        console.log(teste)
        
    })
    
}




