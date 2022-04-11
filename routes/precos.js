var express = require('express');
var axios = require('axios');
const { body, validationResult } = require('express-validator');
var router = express.Router();
var url = 'http://api-server-senac.herokuapp.com/alunos'

router.get('/', function(req, res, next) {
    res.render('precos/precos-list', { title: 'Preços' });
});


module.exports = router;