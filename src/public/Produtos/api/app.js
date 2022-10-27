
//  import fetch from "node-fetch"

const urlProdutos = "https://apis-erp.vercel.app/app/revistas";
const urlImg = "https://apis-erp.vercel.app/app/img";
const ulrEscritor = "https://apis-erp.vercel.app/app/escritor";


async function getEscritor(id){

    fetch(ulrEscritor)
    .then( async response => {
        let conteudo = await response.json();
        
        return conteudo;    
    })
    .then( async data => {

        
        console.table(data.informação)

    })

    
}

async function getProdutos(id){

    fetch(urlProdutos)
    .then( async response => {
        let conteudo = await response.json();
        
        return conteudo;    
    })
    .then( async data => {
        
        
        console.table(data.informação)
        
    })

    
}

async function getImage(id){
    
    fetch(urlImg)
    .then( async response => {
        let conteudo = await response.json();
        
        return conteudo;    
    })
    .then( async data => {
        
        
        console.table(data.informação)

    })

    
}

const produtos = {  

    teste: () => console.log("Esta exportação deu certo"),

    app: async () =>  {

        fetch(urlProdutos)
        .then( async datas => {
            
            let ruth = await datas.json();
            return ruth;
            
        })
        .then( async produtos  => {
            
            


            // let content = produtos.informação;
            // let quantidade = produtos.informação.length;
            // const box = document.querySelector('.caxa-com-produto');
            // const titulo = document.querySelector('.titulo-produtos');
            // const descrição = document.querySelector('.descrição-produto');        
            // const img = document.querySelector('.imgProduto')

            // for(let i = 0; i < quantidade; i++){
                
            //     titulo.innerHTML = content[i].titulo;


            // }
            
        } )
    }

}

console.log('Este algoritmo deu certoooo')

