const express = require('express');
const bodyParser = require('body-parser');
const customerRoute = require('./router/customerRoute');
const server = express();
const port = 3000;

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(customerRoute);

const checkAuthorization = (req, res, next)=>{
    const authorization = req.headers.authorization;

    if (!authorization) {
        res.status(401).json('Authorization code not found');
        return;
    }

    if (parseInt(authorization) !== 1999) {
        res.status(401).json('Authorization code is invalid');
        return;
    }
    next();
}

server.use(checkAuthorization);

server.post('/api/v1/customer', (req, res) => {
    const body = req.body;

    console.log('Name: ', body.name);
    console.log('Address: ', body.age);

    if (!body.age ){
        console.log('Age is a invalid field');
    }
    
    console.log('Request body', body);
    console.log('Post executed');

    res.json(body);
});

server.listen(port, ()=> {    
    console.log(`Server is running ${port}`);
});
