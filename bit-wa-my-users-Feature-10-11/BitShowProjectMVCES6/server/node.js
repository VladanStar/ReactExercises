const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html', 'text/css');
  fs.readFile('.././index.html',null, function(error,data){
    if(error){
       res.writeHead(404);
       res.write('File not found');
    }else{
      res.write(data)
    }
    res.end()
  })

});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});

