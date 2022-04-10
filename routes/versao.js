var express = require('express');
var axios = require('axios');
var router = express.Router();
var url = 'https://apiflor.herokuapp.com/versao'
var urlTabela = 'https://apiflor.herokuapp.com/marcas'


router.get('/', function (req, res, next) {
  axios.get(url)
  .then(function (response) {
      res.render('versao/versao-list', { versoes: response.data, title: 'Versões' });
  })
  .catch(function (error) {
     console.log("Erro ao carregar Modelos: ", error);
  })
});

router.get('/edit/:id', function(req, res, next) {
  let dataMarcas = [];
  axios.get(urlTabela)
  .then(function (response) {
    dataMarcas = response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
  axios.get(`${url}/${req.params.id}`)
  .then(function(response) {
    res.render('versao/versao-form', { 
      title: 'Editar Modelo', 
      marcas: dataMarcas,
      data: response.data, 
      route: 'update',
      btn: "Atualizar",
      reset: "disabled"
    });
  })
  .catch(function(error) {
    console.log(error);
  })
});

router.get('/add', function (req, res, next) {
  axios.get(urlTabela)
  .then(function(response) {

    res.render('versao/versao-form', { 
        marcas: response.data,
        title: 'Adicionar Modelo', 
        data: {nome: ''}, 
        route: 'save',
        btn: "Salvar",
        reset: ""
      });
  })
  .catch(function(error) {
    console.log(error);
  })

});

router.post('/save', function (req, res, next) {
    
  axios.post(url, req.body)
  .then(function (response) {
  })
  .catch(function (error) {
    console.log(error);
  });
  res.redirect('/versao');
});

router.post('/update', function(req, res, next) {
  axios.patch(`${url}/${req.body.id}`, req.body)
  .then(function (response) {
  })
  .catch(function (error) {
    console.log(error);
  });
  res.redirect('/versao');
});

router.get('/remove/:id', function(req, res, next) {
  axios.delete(`${url}/${req.params.id}`)
  .then(function (response) {
  })
  .catch(function (error) {
    console.log(error);
  });
  res.redirect('/versao');
});



module.exports = router;