var express = require('express');
var axios = require('axios');
var router = express.Router();
var url = 'http://api-server-senac.herokuapp.com/alunos'

router.get('/', function(req, res, next) {
    res.render('modelos/modelos-list', { title: 'Modelos' });
});


module.exports = router;