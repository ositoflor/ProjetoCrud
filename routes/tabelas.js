var express = require('express');
var axios = require('axios');
var router = express.Router();
var url = 'https://apiflor.herokuapp.com/tabela'

router.get('/', function (req, res, next) {
  axios.get(url)
  .then(function (response) {
      res.render('tabela/tabelas-list', { tabelas: response.data, title: 'Tabelas' });
  })
  .catch(function (error) {
     console.log("Erro ao carregar tabelas: ", error);
  })
});

router.get('/edit/:id', function(req, res, next) {
  axios.get(`${url}/${req.params.id}`)
  .then(function(response) {
    res.render('tabela/tabelas-form', { 
      title: 'Editar Tabela', 
      data: response.data, 
      route: 'update',
      btn: "Atualizar"
    });
  })
  .catch(function(error) {
    console.log(error);
  })
});

router.get('/add', function (req, res, next) {
  res.render('tabela/tabelas-form', { 
      title: 'Adicionar Tabela', 
      data: {nome: ''}, 
      route: 'save',
      btn: "Salvar"
    });
});

router.post('/save', function (req, res, next) {
    
  axios.post(url, req.body)
      .then(function (response) {

      })
      .catch(function (error) {
          console.log(error);
      });
  res.redirect('/tabelas');
});

router.post('/update', function(req, res, next) {
  axios.patch(`${url}/${req.body.id}`, req.body)
  .then(function (response) {
  })
  .catch(function (error) {
    console.log(error);
  });
  res.redirect('/tabelas');
});

router.get('/remove/:id', function(req, res, next) {
  axios.delete(`${url}/${req.params.id}`)
  .then(function (response) {
  })
  .catch(function (error) {
    console.log(error);
  });
  res.redirect('/tabelas');
});



module.exports = router;