import fs from 'fs';

fs.writeFile('write.txt', "Write file in Node!", (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File write successfully!!");
    }
})