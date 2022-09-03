const obterIDUsuario = ()=>{
    console.log('ID Usuário', 100);    
    return 100;    
}

const consultarDadosUsuario = (idUsuario )=>{    
    return new Promise( (resolve, reject) =>{
        try{ 
            setTimeout( ()=>{
                console.log('consultando dados usuário 1');
                const dados = {
                        idUsuario,
                        nome : 'jean',
                        idade : 30}        
                
                resolve(dados);                
            }, 3000);
        
        }catch(error){
            reject(error);
        }
    });
};

const ehMaiorIdade = (dadosUsuario )=>{      
    
    if (!dadosUsuario){ console.log('não tem dados para idade'); return }

    if (dadosUsuario.idade >= 18){
        console.log('eh maior de idade ');
        return true ;
    }else
    if (dadosUsuario.idade < 18){
        console.log('não eh maior de idade');    
    }
}

const main = async ()=>{
    const idUsuario = obterIDUsuario();    

    await consultarDadosUsuario(idUsuario)
        .then( ( dadosUsuario )=>{
            ehMaiorIdade(dadosUsuario);

        })
        .catch( (error)=>{
            console.log('Aconteceu um erro', error );
        });
    //const dadosUsuario = await consultarDadosUsuario(idUsuario);
    //ehMaiorIdade(dadosUsuario);
}

main();