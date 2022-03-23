const name = 'jean';        // const variáveis que não alteram o valor
let   name2 = 'jean';       // let variáveis que alteram valor

const idade = 60;           // inteiro
const peso = 155.60;        // decimal

const ehAzul = true;        // boolean

const data = Date();

/*
    funções no estilo arrow function
    JS permite passar funções como parâmetro
*/  
const primeiraFuncao = (valor, funcao)=>{
    console.log('impressão da primeira função ');
    funcao(valor);    
}

const segundaFuncao = (valor)=>{
    console.log('imprimindo valor passado para segunda função' , valor);
}

const main = ()=>{
    console.log('Hello world');

    //chamar primeira funcao, chamando a segunda função como parâmetro
    primeiraFuncao(100, segundaFuncao);
}

main();