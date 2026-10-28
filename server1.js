
const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'Sayali', branch: 'CSE' },
    { id: 2, name: 'Rahul', branch: 'IT' }
];

// GET: Fetch all students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET: Fetch student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));
    res.json(student || { message: 'Student not found' });
});

// POST: Add a student
app.post('/students', (req, res) => {
    const student = {
        id: students.length
            ? Math.max(...students.map(s => s.id)) + 1
            : 1,
        name: req.body.name,
        branch: req.body.branch
    };

    students.push(student);
    res.status(201).json(student);
});

// PUT: Update a student
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));

    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }

    student.name = req.body.name;
    student.branch = req.body.branch;
    res.json(student);
});

// DELETE: Delete a student
app.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const exists = students.some(s => s.id === id);

    if (!exists) {
        return res.status(404).json({ message: 'Student not found' });
    }

    students = students.filter(s => s.id !== id);
    res.json({ message: 'Student deleted successfully' });
});

// Start server
console.log("Before starting server");

const server = app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

server.on("close", () => {
    console.log("Server was closed!");
});