const obterIDUsuario = ()=>{
    console.log('ID Usuário', 100);    
    return 100;    
}

const consultarDadosUsuario = (idUsuario )=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('consultando dados usuário');
            const dados = {
                idUsuario,
                nome : 'jean',
                idade : 30}
            resolve(dados);
        }, 6000);            
    } );
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
    }
}

const main = async ()=>{
    const idUsuario = obterIDUsuario();    
    const dadosUsuario = await consultarDadosUsuario(idUsuario)
    ehMaiorIdade(dadosUsuario);
}

main();