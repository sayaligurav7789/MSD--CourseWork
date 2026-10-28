
const express = require('express');
const app = express();

app.use(express.json());

const students = [
    { id: 1, name: "Sayali", branch: "CSE" },
    { id: 2, name: "Snehal", branch: "IT" },
    { id: 3, name: "Pragati", branch: "CSE" }
];

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (student) {
        res.json(student);
    } 
    else {
        res.status(404).send("Student not found");
    }
});

app.all('/admin', (req, res) => {
    res.send(`Admin route accessed using ${req.method} method`);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
