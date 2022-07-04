const express = require('express');
const router = express.Router();

router.get("/on", (req, res) => {
    res.json({
        mensagem:"Online"
    })
});

router.get("/revistas",(req, res)=> {
    res.json({
        mensagem: "API de revistas online"
    })
})

module.exports = router;