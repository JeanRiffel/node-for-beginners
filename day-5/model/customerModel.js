const data = require('../data.json');

const getAllCustomers = ()=> {
    return data;
}

const getCustomerById = (customerId)=> {    
    const filteredCustomer = data.customers
        .filter((customer)=> {
            return customer.id.toString() === customerId;
        });
    return filteredCustomer;
}

module.exports = { 
    getAllCustomers,
    getCustomerById
}