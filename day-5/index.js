const express = require('express');
const bodyParser = require('body-parser');


const clienteRouter = require('./router/cliente-router');

const server = express();
const porta = 3000;

server.use( bodyParser.urlencoded(  { extended: true} ) );
server.use( bodyParser.json());

server.use( clienteRouter );

const validarAutorizacao = (req, res, next)=>{
    const authorization = req.headers.authorization;

    if( ! authorization ){
        res.status(401).json('Código de autorização não foi informado' );
        return;
    }

    if(parseInt(authorization) !== 1999 ){
        res.status(401).json('Código de autorização é inválido' );
        return;
    }
    next();
}

server.use(validarAutorizacao);


server.post('/api/v1/cliente',  ( req, res ) =>{

    const body = req.body;

    console.log('Meu nome', body.nome );
    console.log('Meu endereço', body.idade );

    if (! body.idade ){
        console.log('campo inválido')
    }
    
    console.log('Corpo da requisição',  body );
    console.log('agora estou executando post');

    res.json( body );
});

server.listen( porta ,  ()=>{    
    console.log(`Servidor esta rodando ${porta} ` );
} )
