# Node-examples

Esse repositório é para estudos dos principais pontos a respeito do NodeJS.


Exemplo de principais comandos:

```
- npm init:  criar o arquivo package.json

- npm install nodemon  
    --save       ->parâmetro como dependência de aplicação 
    --save-dev   ->parâmetro como dependência de dev

- npm remove nodemon 

- npm install ->executa todas dependências que existentes no package.json

- *diretório node_modules deve ser colocado no .gitignore 
 
``` 

### Pacotes úteis.

- [Reiniciar a aplicação a cada vez que é salva alguma alteração](https://www.npmjs.com/package/nodemon)  npm install nodemon --save-dev

- [Parsear request ](https://www.npmjs.com/package/body-parser) 
npm install body-parser --save

- [Manipular datas no javascript](https://momentjs.com/) npm install moment --save

- [Agendamento de jobs](https://www.npmjs.com/package/cron) npm i cron

- [Framework para construir API](https://expressjs.com/) npm install express --save

- [Axios Http cliente para requisições](https://www.npmjs.com/package/axios) npm i axios --save

## Sugestão de conteúdos  


#### Não bloqueie o event loop 

- [Não bloqueie event loop](https://nodejs.org/pt-br/docs/guides/dont-block-the-event-loop/ )


#### Operações sincronas com NodeJS.

- [Gerenciando fluxo assincrono](
https://imasters.com.br/desenvolvimento/gerenciando-o-fluxo-assincrono-de-operacoes-em-nodejs)

- [Como escrever código assincrono](
https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js-pt
)

- [Evolução do nodeJS assincrono](https://medium.com/@felipemonobe/evolucao-assincrono-nodejs-p1-7fe46450425b)

- [Programação assincrona com NodeJS](
https://www.devmedia.com.br/programacao-assincrona-com-node-js/31509
)