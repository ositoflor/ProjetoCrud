var express = require('express');
var axios = require('axios');
var router = express.Router();
var url = 'http://api-server-senac.herokuapp.com/alunos'

/*GET todos os alunos. */
router.get('/', function (req, res, next) {
    axios.get(url)
    .then(function (response) {
        console.log(response.data);
        res.render('pages/alunos-list', { alunos: response.data, title: 'Alunos' });
    })
    .catch(function (error) {
       console.log(error);
    })
});


// Pegar aluno pelo id

router.get('/edit/:id', function(req, res, next) {
    axios.get(`${url}/${req.params.id}`)
    .then(function(response) {
      console.log(response.data);
      res.render('pages/alunos-form', { 
        title: 'Editar Alunos', 
        data: response.data, 
        route: 'update' 
      });
    })
    .catch(function(error) {
      console.log(error);
    })
});
/*GET form do alunos. */
router.get('/add', function (req, res, next) {
    res.render('pages/alunos-form', { 
        title: 'Adicionar Alunos', 
        data: {nome: '', curso: '', matricula: ''}, 
        route: 'save'
      });
});

/*GET aluno pelo ID. */
router.get('/:id', function (req, res, next) {
    res.send(`respond os cursos pelo id ${req.params}`);
});

/*POST aluno */
router.post('/save', function (req, res, next) {
    
    axios.post(url, req.body)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    res.redirect('/alunos');
});

router.post('/update', function(req, res, next) {
    console.log('passei no put', req.body.id);
    axios.patch(`${url}/${req.body.id}`, req.body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    res.redirect('/alunos');
});

router.get('/remove/:id', function(req, res, next) {
    axios.delete(`${url}/${req.params.id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    res.redirect('/alunos');
});



module.exports = router;