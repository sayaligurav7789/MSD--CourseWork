const fs = require('fs');

const data = "Hello, this is synchronous file writing in Node.js.";

try {
    fs.writeFileSync('sync.txt', data);
    console.log("File written successfully.");
} catch (err) {
    console.log("Error:", err);
}