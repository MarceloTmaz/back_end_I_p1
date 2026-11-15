var express = require('express');
var router = express.Router();
var controller_oficina= require('../controller/controller_oficina')
/* GET home page. */
router.get('/cadastrar', controller_oficina.cadastrar);

router.post('/cadastrar', controller_oficina.cadastrar_post);

router.get('/buscar',controller_oficina.buscar)

router.post('/buscar',controller_oficina.buscar_post);

router.get('/consulta/:id',controller_oficina.consulta)

router.get('/atualizar/:id',controller_oficina.editar)

router.post('/atualizar',controller_oficina.editar_post)

router.post('/excluir',controller_oficina.deletar)

router.post('/condicao',controller_oficina.condicao)

module.exports = router;