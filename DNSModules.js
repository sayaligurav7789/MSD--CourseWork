
const dns = require('dns');

dns.lookup('google.com', (err, address) => {
    if (err) throw err;
    console.log("IP Address:", address);
});

dns.resolve('google.com', (err, addresses) => {
    if (err) throw err;
    console.log("DNS Addresses:", addresses);
});

dns.reverse('8.8.8.8', (err, hostnames) => {
    if (err) throw err;
    console.log("Hostnames:", hostnames);
});
