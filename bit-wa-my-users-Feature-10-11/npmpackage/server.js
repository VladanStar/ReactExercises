const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const trans = require('./exam')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(trans());
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});


