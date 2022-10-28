
//  import fetch from "node-fetch"

const urlProdutos = "https://apis-erp.vercel.app/app/revistas";
const urlImg = "https://apis-erp.vercel.app/app/img";
const ulrEscritor = "https://apis-erp.vercel.app/app/escritor";

const myInit = { method: 'GET',
               mode: 'no-cors',
               cache: 'default' };



async function getEscritor(id){

    fetch(ulrEscritor, myInit)
    .then( async response => {
        
        return response.json()

    })
    .then( async data => {

        
        console.table(data.informação)

    })

    
}

async function getProdutos(id){

    fetch(urlProdutos, myInit)
    .then( async response => {
        
        return response.json()   

    })
    .then( async data => {
        
        
        console.table(data.informação)
        
    })

    
}

async function getImage(id){
    
    fetch(urlImg, myInit)
    .then( async response => {
        
        return response.json()  

    })
    .then( async data => {
        
        
        console.table(data.informação)

    })

    
}

const produtos = {  
    
    teste: () => console.log("Esta exportação deu certo"),

    app: async () =>  {


        
        fetch(urlProdutos, myInit)
        .then( async response => {
            
            return response.json()
            
        })
        .then( async produtos  => {
            
            

            let div = document.querySelector('.caixa-com-produto')
            console.log(div)
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

getImage()
