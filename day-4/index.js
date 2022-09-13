const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data.json');
const server = express();
const port = 3000;

server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

const checkAuthorization = (req, res, next)=>{
    const authorization = req.headers.authorization;

    if(!authorization){
        res.status(401).json('Authorization code is not allowed' );
        return;
    }

    if(parseInt(authorization) !== 1999 ){
        res.status(401).json('Authorization is invalid' );
        return;
    }
    next();
}

server.use(checkAuthorization);

server.get('/api/v1/customer', (req, res) => {
    res.json(data);
});

server.post('/api/v1/customer', (req, res) =>{
    const body = req.body;

    console.log('Name: ', body.name);
    console.log('Address', body.age);

    if (!body.age) {
        console.log('Age is a invalid field');
    }
    
    console.log('Body request', body);
    console.log('Post executed');

    res.json(body);
});

server.get('/api/v1/customer/:customerId', ( req, res ) =>{    
    const customerId = req.params.customerId;

    const filteredData = data.customers.filter(customer => {
        return customer.id.toString() === customerId;
    });

    if(filteredData.length === 0){
        res.status(404).json({ msg: 'Data not found'});
        return;
    }
    res.json(filteredData);
});

server.listen(port, ()=>{    
    console.log(`Server is running ${port}`);
});
