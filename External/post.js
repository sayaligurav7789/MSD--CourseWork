import express from 'express'
const app = express();

app.use(express.json());

let student = {};

app.post('/student', (req, res) => {
    student = req.body;
    console.log("Student added!");
    res.json(student);
});

app.get('/student', (req, res) => {
    res.json(student);
});
app.listen('3000', () => {
    console.log("Server running on port 3000");
})