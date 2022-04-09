var express = require('express');
var axios = require('axios');
var router = express.Router();
var urlTabela = 'https://apiflor.herokuapp.com/tabela';
var urlMarcas = 'https://apiflor.herokuapp.com/marcas'

/* GET home page. */
router.get('/', function (req, res, next) {
  let dataTabela = [];
  let dataMarcas = [];
  
  axios.get(urlTabela)
    .then(function (response) {
      dataTabela = response.data;
      console.log(dataTabela)
    })
    .catch(function (error) {
      console.log(error);
    })

    axios.get(urlMarcas)
    .then(function (response) {
      dataMarcas = response.data;
      res.render('pages/index', { tabelas: dataTabela, marcas: dataMarcas });
    })
    .catch(function (error) {
      console.log(error);
    })
    
});

module.exports = router;
