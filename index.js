const express = require('express');
const request = require('require');
const server = express();
const port = 3000;
var fs = require('fs');

server.use(express.static('folder'));

server.get('/app',function(request,response){
  response.sendfile('./helloworld.html');
});

fs.readFile('test.txt','utf8',function(err,contents){
  console.log(contents);
});

server.get('/myfile',function(request,response){
  fs.readFile('test.txt','utf8',function(err,contents){
    console.log(contents);
    response.send(contents);
  });
});

server.get('/API',function(request,response){
  request('https://jsonplaceholder.typicode.com/todos/',{json: true},(err,response,body)=> {
    iff(err){ return console.log(err);}
    console.log(body.url);
    console.log(body.explanation);
    responds.send(body);
  });
});

console.log('after calling readFile');
server.listen(port, () => console.log('Example app listening on port ${port}! '));
