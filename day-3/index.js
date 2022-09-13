const express = require('express');
const server = express();
const port = 3000;

server.get('/api/v1/customer', (req, res)=>{
    console.log('hello world :) ');

    const data = {
        company: 'Sky Dreams',
        registration_number: '06845465465',
        address: 'Heaven street'
    }

    res.json(data);
});

server.get('/api/v1/customer/:customerId', (req, res)=>{
    const customerId = req.params.customerId;
    console.log('customer Id ', customerId);

    const data = {
        customerId,
        status : 'new query',
        company: 'Sky Dreams',
        registration_number: '06845465465',
        address: 'Heaven street'
    }

    res.json(data);
});

server.listen(port, ()=>{
    console.log('Hey, server is running!');
});