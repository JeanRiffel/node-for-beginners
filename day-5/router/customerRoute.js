const express = require('express');
const router = express.Router();
const customerController  = require('../controller/customerController');

router.get('/api/v1/customer', 
    customerController.getAllCustomers
);

router.get('/api/v1/customer/:customerId', 
    customerController.getCustomerById
);

module.exports = router;
