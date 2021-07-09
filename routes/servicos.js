const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'c:/JavascriptDH/arquivosMulter'})
const fs = require('fs');
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

router.post('/importar', upload.single('file'), (req, res)=>{
    const itensServico = fs.readFileSync(req.file.path, "utf-8");
    servicosController.importarItemServico(itensServico);
    res.send(req.file);
})

module.exports = router;