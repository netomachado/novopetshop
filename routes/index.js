const express = require('express');
const { precosServicos } = require('../models/models');
const router = express.Router();
const precos = require("../controllers/controller")


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render( "index" , preco.precosServicos());
});

router.get('/sevicos', (req, res, next) => {
  const { taxaDesconto } = req.query;

  const listaServicosComDesconto = servicosController(taxaDesconto);
  res.render( "index" , preco.precosServicos());
});


module.exports = router;
