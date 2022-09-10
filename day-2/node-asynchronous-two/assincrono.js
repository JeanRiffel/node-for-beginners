const consultaJadLog = (tempo)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('consulta...jadlog');
            const dados ={  nome : "jadlog" }
            resolve(dados);
        }, tempo);            
    } );
};

const consultaTotalExpress = (tempo)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('consulta...total');
            const dados ={  nome : "total express"  }
            resolve(dados);
        }, tempo);            
    } );
};

const consultaTotalCorreio = (tempo)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('consulta...correio');
            const dados ={ nome : "correio" }
            resolve(dados);
        }, tempo);            
    } );
};

const consultarPontosAsync = ()=>{
    
    consultaJadLog(5500);
        
    consultaTotalCorreio(3800);
        
    consultaTotalExpress(2100);
        
    return;
}

const mostrarPontosAsync = ()=>{
    consultarPontosAsync();    
    console.log('fim da função');
}

mostrarPontosAsync();
console.log('aplicação finalizada');
