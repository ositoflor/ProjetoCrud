var express = require('express');
var axios = require('axios');
var router = express.Router();
var urlTabela = 'https://apiflor.herokuapp.com/tabela';
var urlMarcas = 'https://apiflor.herokuapp.com/marcas';
var urlModelos = 'https://apiflor.herokuapp.com/modelos';

/* GET home page. */
router.get('/', function (req, res, next) {
  let dataTabela = [];
  let dataMarcas = [];
  let dataModelos = [];
  
  axios.get(urlTabela)
    .then(function (response) {
      dataTabela = response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    axios.get(urlModelos)
    .then(function (response) {
      dataModelos = response.data;
    })
    .catch(function (error) {
      console.log(error);
    })

    axios.get(urlMarcas)
    .then(function (response) {
      dataMarcas = response.data;
      res.render('pages/index', { tabelas: dataTabela, marcas: dataMarcas, modelos: dataModelos });
    })
    .catch(function (error) {
      console.log(error);
    })
    
});

module.exports = router;
