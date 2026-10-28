const fs = require('fs');

const data = "Hello, this is asynchronous file writing in Node.js.";

fs.writeFile('async.txt', data, (err) => {
    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log("File written successfully.");
});

console.log("Program continues...");