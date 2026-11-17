import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type' : 'text/ plain'});
    res.write("Hello World");
    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});