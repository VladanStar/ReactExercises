const http = require('http');
const getFakeData = require('./data.js');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500');
  const postJson = JSON.stringify(getFakeData(5))
  res.end(postJson);
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});


