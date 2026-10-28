const os = require('node:os');

console.log("=== Operating System Information ===\n");

//Platform and Architecture
console.log(`OS Platform:     ${os.platform()}`); 
console.log(`OS Type:         ${os.type()}`);     
console.log(`Architecture:    ${os.arch()}`);     
console.log(`OS Release:      ${os.release()}`);  
//CPU Details
const cpus = os.cpus();
console.log(`CPU Model:       ${cpus[0].model}`);
console.log(`Total CPU Cores: ${cpus.length}`);

//Memory Usage (Converted from Bytes to Gigabytes for readability)
const totalMemoryGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
const freeMemoryGB = (os.freemem() / (1024 ** 3)).toFixed(2);
console.log(`Total Memory:    ${totalMemoryGB} GB`);
console.log(`Free Memory:     ${freeMemoryGB} GB`);

//System Uptime & User Info
const uptimeHours = (os.uptime() / 3600).toFixed(2);
console.log(`System Uptime:   ${uptimeHours} hours`);
console.log(`Current User:    ${os.userInfo().username}`);
console.log(`Home Directory:  ${os.homedir()}`);

//Network Interfaces (Lists available IP addresses)
console.log("\n=== Network Interfaces ===");
const networkInterfaces = os.networkInterfaces();
Object.keys(networkInterfaces).forEach((interfaceName) => {
    networkInterfaces[interfaceName].forEach((details) => {
        if (details.family === 'IPv4' && !details.internal) {
            console.log(`${interfaceName}: ${details.address}`);
        }
    });
});
