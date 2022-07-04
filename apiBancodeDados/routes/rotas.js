const { json } = require('express');
const express = require('express');
const router = express.Router();
const {getEscritor, getRevistas, getImgURL} = require("../bdConexão")

router.get("/on", (req, res) => {
    res.json({
        mensagem:"Online"
    })
});

router.get("/revistas", async (req, res)=> {
    
    try{
        let revistas = {Mensagem:"API SERP Revistas"}
        revistas.informação = await getRevistas();
        
        res.send(JSON.stringify(revistas))
    
    } 
    catch(err) {
        console.log(err)
        res.send(err);
    }
    
})

router.get("/img", async (req, res)=> {
    try{

        let imagemUrl = {Mensagem:"API Serp Imagens"};
        imagemUrl.informação = await getImgURL();

        res.send(JSON.stringify(imagemUrl));

    }
    catch(err){
        console.log(err);
        res.send(err);
    }
})

router.get("/escritor", async (req, res)=>{
    try{

        let escritor = {Mensagem: "API Serp Escritores"} 
        escritor.informação = await getEscritor();

        res.send(JSON.stringify(escritor)); 

    }
    catch(err){
        console.log(err);
        res.send(err);
    }
})

module.exports = router;
