import fs from 'fs';

const writer = fs.createWriteStream('output.txt');

writer.write("Hay Sayali!");
writer.end();
writer.on('finish', () => {
    console.log("Writing Completed");
});