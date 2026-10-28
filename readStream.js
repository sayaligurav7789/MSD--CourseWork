const fs = require("fs");

const readStream = fs.createReadStream("large.txt");

readStream.on("data", (chunk) => {
    console.log(chunk);
});

readStream.on("end", () => {
    console.log("Reading completed");
});