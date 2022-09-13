const customerModel = require('../model/customerModel');

const getAllCustomers = (req, res) => {    
    const data = customerModel.getAllCustomers();  
    res.status(200).json(data);
};

const getCustomerById = (req, res) => {
    const customerId = req.params.customerId;
    const customer = customerModel.getCustomerById(customerId)

    if (customer.length === 0) {
        res.status(404).json({msg: 'data not found'});
        return;
    }
    res.status(200).json(customer);    
};

module.exports = {
    getAllCustomers,
    getCustomerById
}

