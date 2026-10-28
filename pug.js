const express = require('express');
const app = express();

// Set Pug as the template engine
app.set('view engine', 'pug');

// Route
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Welcome',
        message: 'Hello, Welcome to Express.js with Pug!'
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});