const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
//   console.log(res);

let path = './views/'
switch (req.url) {
    case '/':
        path += 'index.html'
        break;
    case '/about':
        path += 'about.html'
        break;
    case '/errorr':
        path += 'errorr.html'
        res.statusCode=404
        break;
    default:
        break;
}

res.setHeader('Content-Type', 'text/html');

fs.readFile(path, (err, data)=>{
    if (err) {
        console.log(err);
        res.end()
    } else {
      res.end(data)  
    }
})

// res.end();
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});