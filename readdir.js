const fs = require('fs');

fs.readdir('.', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Directory Contents:");

        files.forEach((file) => {
            console.log(file);
        });
    }
});
