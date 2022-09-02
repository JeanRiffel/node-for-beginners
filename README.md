# Node-examples

This repo is for studying topics about NodeJS that every developer should know.

Here I want to share my knowledge I have acquired through my own studies, whether is useful for you please feel free for using it.

<code><img height="20" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"></code>
<code><img height="20" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"></code>
<code><img height="20" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></code>
_________________________

The main commands for starting a new app on NodeJS.

```
- npm init:  it will create the config file called package.json

- npm install nodemon  
    --save       -> parameter for setting applications dependencies.
    --save-dev   -> parameter for setting developer dependencies ( which only the developer will use for developing, is not necessary for running the app :) )

- npm remove nodemon 

- npm install -> it will install all dependencies set in the file package.json

- *place the folder node_modules into .gitignore because you can install all dependencies using npm install command.
 
``` 

### Useful packages for studying.


- [Restart the app when some changing is made](https://www.npmjs.com/package/nodemon)  npm install nodemon --save-dev

- [Parsear request ](https://www.npmjs.com/package/body-parser)
npm install body-parser --save

- [Manipulating format dates in an easy way](https://momentjs.com/) npm install moment --save

- [Scheduling jobs](https://www.npmjs.com/package/cron) npm i cron

- [Framework for building API](https://expressjs.com/) npm install express --save

- [Axios Http client to make requests](https://www.npmjs.com/package/axios) npm i axios --save

- [Oracle package](https://www.npmjs.com/package/oracledb)

- [For authentication JWT](https://www.npmjs.com/package/express-jwt)

## Content for studying


#### Don't block the event loop

- [Please, do not block the event loop :)](https://nodejs.org/pt-br/docs/guides/dont-block-the-event-loop/ )


#### Sync and Async approach in NodeJS.

- [PT][Gerenciando fluxo assincrono](
https://imasters.com.br/desenvolvimento/gerenciando-o-fluxo-assincrono-de-operacoes-em-nodejs)

- [How to write asynchronous code](
https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js-pt
)

- [PT][Evolução do nodeJS assincrono](https://medium.com/@felipemonobe/evolucao-assincrono-nodejs-p1-7fe46450425b)

- [PT][Programação assincrona com NodeJS](
https://www.devmedia.com.br/programacao-assincrona-com-node-js/31509
)

- [PT][Async / Await Simples e Descomplicado no JavaScript - Youtube](https://www.youtube.com/watch?v=h0sNAXE1ozo)

- [PT][Desvendando Definitivamente as Promises em JavaScript - Youtube](https://www.youtube.com/watch?v=nRJhc6vXyK4)

- [PT][Callback - Youtube ](https://www.youtube.com/watch?v=zUtqTM6_-PM)

- [PT][JS Assíncrono: Entenda de vez Callbacks, Promises e Async/Await - Youtube](https://www.youtube.com/watch?v=7Bs4-rqbCQc)

#### Generating Tokens with JWT ####

- [JWT](https://jwt.io/)

- [PT][Como o JWT Funciona](https://www.devmedia.com.br/como-o-jwt-funciona/40265)

- [PT][O que é JWT? Aprenda tudo sobre o JSON Web Token - Youtube](https://www.youtube.com/watch?v=sHyoMWnnLGU)

#### Accessing Oracle (Oficial) ####

- [Oracle Node.Js Developer Center](https://developer.oracle.com/br/nodejs/ )

- [GitHub da Oracle](https://oracle.github.io/node-oracledb/)

- [Documentação node-oracledb](https://oracle.github.io/node-oracledb/doc/api.html)


#### YouTube channels ####

- [PT][Rocketseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg)

- [PT][Erick Wendel](https://www.youtube.com/c/ErickWendelTreinamentos)

- [PT][Filipe Deschamps](https://www.youtube.com/c/FilipeDeschamps)

- [PT][Mango](https://www.youtube.com/c/MangoDeveloper)

- [PT][Rodrigo Brannas](https://www.youtube.com/c/RodrigoBranas)

#### In English ####

- [NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)](https://www.udemy.com/course/nodejs-the-complete-guide/)

