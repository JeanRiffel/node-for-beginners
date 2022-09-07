const obterIDUsuario = ()=>{
    console.log('ID Usuário', 100);    
    return 100;    
}

const consultarDadosUsuario = (idUsuario )=>{
    return new Promise ( (resolve, reject )=>{
        try{
            setTimeout( ()=>{ 
                console.log('consultando dados usuário');
                const dados = {
                    idUsuario,
                    nome : 'john',
                    idade : 30}
                resolve(dados);
            }, 6000);            
        }catch(error){
            reject(error)
        }
    });
};

const ehMaiorIdade = (dadosUsuario )=>{
    
    if (!dadosUsuario){ console.log('não tem dados para idade'); return }
    if (!dadosUsuario.idUsuario){ console.log('não encontrado idUsuario no objeto'); return }

    if (dadosUsuario.idade >= 18){
        console.log('eh maior de idade ');
        return true ;
    }else
    if (dadosUsuario.idade < 18){
        console.log('não eh maior de idade');  
        return false;  
    }
}

const main = ()=>{
    const idUsuario = obterIDUsuario();    
    consultarDadosUsuario(idUsuario)
        .then( dadosUsuario =>{
            ehMaiorIdade(dadosUsuario);
        })
        .catch( (error)=>{
            console.error(error);
        } );
}

main();