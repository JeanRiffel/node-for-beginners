const obterIDUsuario = ()=>{
    console.log('ID Usuário', 100);    
    return 100;    
}

const consultarDadosUsuario = (idUsuario)=>{
    
    console.log('consultando dados usuário');
    const dados = {
            idUsuario,
            nome : 'joão',
            idade : 30}
    
    return dados;    
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
    const dadosUsuario =consultarDadosUsuario(idUsuario);
    ehMaiorIdade(dadosUsuario);
}

main();