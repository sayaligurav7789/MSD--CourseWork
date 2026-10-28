const fs = require("fs");

fs.open("buffer-output.txt", "r", (err, fd) => {
    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log("File opened successfully");
    console.log("File Descriptor:", fd);

    fs.close(fd, (err) => {
        if (err) {
            console.log("Error closing file:", err);
        } else {
            console.log("File closed successfully");
        }
    });
});