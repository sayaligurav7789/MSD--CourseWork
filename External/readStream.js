import fs from 'fs';

const read = fs.createReadStream('output.txt', 'utf8');

read.on('data', (chunk) => {
    console.log("recieved Data: ");
    console.log(chunk);
});

read.on('end', () => {
    console.log("Reading Completed!");
});

read.on('error', (err) => {
    console.log(err);
});
