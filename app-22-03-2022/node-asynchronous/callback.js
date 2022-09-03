/*
    Exemplo usando callback
*/

const obterIDUsuario = ()=>{
    console.log('ID Usuário', 100);    
    return 100;    
}

const consultarDadosUsuario = (idUsuario, callback )=>{
    setTimeout( ()=>{ 
        console.log('consultando dados usuário');
        const dados = {
            idUsuario,
            nome : 'jean',
            idade : 30}
        callback(dados);            
    }, 6000);            
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

const main =  ()=>{
    const idUsuario = obterIDUsuario();
    consultarDadosUsuario(idUsuario, ehMaiorIdade );
}

main();