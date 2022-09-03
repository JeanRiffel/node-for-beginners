const consultaJadLog = (tempo)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('consultando...jadlog');
            const dados ={  nome : "jadlog" }
            resolve(dados);
        }, tempo);            
    } );
};

const consultaTotalExpress = (tempo)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('consultando...total');
            const dados ={  nome : "total express"  }
            resolve(dados);
        }, tempo);            
    } );
};

const consultaTotalCorreio = (tempo)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('consultando...correio');
            const dados ={ nome : "correio" }
            resolve(dados);
        }, tempo);            
    } );
};

const consultarPontos = async ()=>{
    const resultado = [];
    
    const jadlog =  await consultaJadLog(3000);
    resultado.push(jadlog);
    
    const correio =  await consultaTotalCorreio(2010);
    resultado.push(correio);
    
    const totaExpress =  await consultaTotalExpress(1500);
    resultado.push(totaExpress);

    let retorno = {};
    retorno.nome = "resultado da consulta pontos";
    retorno.resultado = resultado;

    return retorno;
}

const mostrarPontos = async ()=>{
    const pontoDisponiveis = await consultarPontos();
    console.log('Os pontos disponiveis são \n ', pontoDisponiveis);
}

mostrarPontos();


