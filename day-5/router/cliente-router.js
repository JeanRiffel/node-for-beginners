const express = require('express');
const router = express.Router();
const clienteController  = require('../controller/cliente-controller');

router.get('/api/v1/cliente', 
    clienteController.retornaTodosClientes );

router.get('/api/v1/cliente/:id', 
    clienteController.retornaClientePorId );





module.exports = router;
