import express from 'express';
const app = express();

app.use((req, res, next) => {
    console.log("Middleware Executed!");
    next();
});
app.get('/',(req, res) => {
    res.send("Welcome to Express.js");
});
app.listen('3000', () => {
    console.log("Server running on port 3000");
});