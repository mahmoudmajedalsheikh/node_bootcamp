// /Users/engmahmoudmajed/Documents/My projects/node_bootcamp/Section-4/01-understanding-npm-scripts

const http = require('http');
const routes = require('./routes');
/*
* npm i nodemon            //as main dep
* npm i nodemon --save-dev //as dev dep
* npm i nodemon -g         //in machine
*
* */
console.log(routes.someText);

const server = http.createServer(routes.handler);


server.listen(3000);
