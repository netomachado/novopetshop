const express = require('express');
const { precosServicos } = require('../models/servicosModel');
const router = express.Router();
const servicosController = require("../controllers/servicosController")


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render( "index" , { title: 'Express'});
});


module.exports = router;
