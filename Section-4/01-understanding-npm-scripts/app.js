// /Users/engmahmoudmajed/Documents/My projects/node_bootcamp/Section-4/01-understanding-npm-scripts

const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);


server.listen(3000);
