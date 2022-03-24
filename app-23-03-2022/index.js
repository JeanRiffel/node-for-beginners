const express = require('express');
const server = express();
const porta = 3000;

server.get('/api/v1/cliente', ( req, res )=>{
    console.log('olá mundo cliente');

    const objeto = {
        empresa : 'Loghaus',
        cnpj : '2222222222',
        endereco : 'Rua Werner Duwe 202'
    }

    res.json( objeto);
});

server.get('/api/v1/cliente/cliente/:idCliente', ( req, res )=>{
    const idCliente = req.params.idCliente;
    console.log('olá mundo cliente id ',idCliente );

    const objeto = {
        idCliente,
        status : 'nova consulta',
        empresa : 'Loghaus',
        cnpj : '2222222222',
        endereco : 'Rua Werner 202'
    }

    res.json( objeto);
});

server.listen( porta ,  ()=>{
    console.log('Servidor esta rodando');
} )
