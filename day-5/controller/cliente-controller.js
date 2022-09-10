const clienteModel = require('../model/cliente-model');

const retornaTodosClientes = ( req, res )=>{
    
    const dados = clienteModel.consultaTodosClientes();  
    res.json( dados );
}

const retornaClientePorId = ( req, res )=>{
    const id = req.params.id;

    const resultado = clienteModel.consultaClientePorId(id)

    if(resultado.length === 0){
        res.status(404).json( { msg : 'sem dados' } );
        return;
    }
    res.json(resultado);    
}

module.exports = {
    retornaTodosClientes,
    retornaClientePorId
}