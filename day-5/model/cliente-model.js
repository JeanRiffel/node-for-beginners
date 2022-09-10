const dados = require('../data.json');

const consultaTodosClientes = ()=>{
    return dados
}

const consultaClientePorId = (id)=>{
    //
    const resultado = dados.data.filter( elemento =>{
        return elemento.id.toString() === id;
    } );
    return resultado;
}

module.exports = { 
    consultaTodosClientes,
    consultaClientePorId
}