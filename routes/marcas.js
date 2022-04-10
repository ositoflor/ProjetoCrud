var express = require('express');
var axios = require('axios');
var router = express.Router();
var url = 'https://apiflor.herokuapp.com/marcas'
var urlTabela = 'https://apiflor.herokuapp.com/tabela'


router.get('/', function (req, res, next) {
  axios.get(url)
  .then(function (response) {
      res.render('marcas/marcas-list', { marcas: response.data, title: 'Marcas' });
  })
  .catch(function (error) {
     console.log("Erro ao carregar Marcas: ", error);
  })
});

router.get('/edit/:id', function(req, res, next) {
  let dataTabelas = [];
  axios.get(urlTabela)
  .then(function (response) {
    dataTabelas = response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
  axios.get(`${url}/${req.params.id}`)
  .then(function(response) {
    res.render('marcas/marcas-form', { 
      title: 'Editar Marca', 
      tabelas: dataTabelas,
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

    res.render('marcas/marcas-form', { 
        tabelas: response.data,
        title: 'Adicionar Marca', 
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
  res.redirect('/marcas');
});

router.post('/update', function(req, res, next) {
  axios.patch(`${url}/${req.body.id}`, req.body)
  .then(function (response) {
  })
  .catch(function (error) {
    console.log(error);
  });
  res.redirect('/marcas');
});

router.get('/remove/:id', function(req, res, next) {
  axios.delete(`${url}/${req.params.id}`)
  .then(function (response) {
  })
  .catch(function (error) {
    console.log(error);
  });
  res.redirect('/marcas');
});



module.exports = router;