const express = require('express');
const bodyParser = require('body-parser');

const dados = require('./data.json');

const server = express();
const porta = 3000;

server.use( bodyParser.urlencoded(  { extended: true} ) );
server.use( bodyParser.json());

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

server.get('/api/v1/cliente', ( req, res ) =>{
    res.json( dados );
});

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

server.get('/api/v1/cliente/:id', ( req, res ) =>{
    
    const id = req.params.id;

    const resultado = dados.data.filter( elemento =>{
        return elemento.id.toString() === id;
    } );

    if(resultado.length === 0){
        res.status(404).json( { msg : 'sem dados' } );
        return;
    }
    res.json(resultado);
});

server.listen( porta ,  ()=>{    
    console.log(`Servidor esta rodando ${porta} `);
} )
