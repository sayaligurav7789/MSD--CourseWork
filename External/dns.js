import dns from 'dns';

dns.lookup('google.com',(err, address) => {
    if(err){
        throw err;
    }
    console.log(address);
});

dns.resolve('google.com', (err, addresses) => {
    if(err){
        throw err;
    }
    console.log(addresses);
});

dns.reverse('8.8.8.8', (err, hostnames) => {
    if(err){
        throw err;
    }
    console.log(hostnames);
})