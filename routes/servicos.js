const express = require('express');
const router = express.Router();
const servicosController = require("../controllers/servicosController");


/* GET users listing. */
router.get('/', function(req, res) {
    const { taxaDesconto } = req.query;
    const listaServicosComDesconto = servicosController.compilarListaServicos(taxaDesconto);
    res.render( "listaServicos" , { listaServicosComDesconto });
});

router.post('/', (req, res)=>{
    const { desc, preco} = req.body;
    servicosController.adicionarServico(desc, preco);
    const { taxaDesconto } = req.query;
    const listaServicosComDesconto = servicosController.compilarListaServicos(taxaDesconto);
    res.render( "listaServicos" , { listaServicosComDesconto });
    
})

module.exports = router;