const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<h1>Hello from Node.js Server</h1>');
    res.write('<p>This is a simple web server.</p>');

    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});