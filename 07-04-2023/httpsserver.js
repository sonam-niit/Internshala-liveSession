var https= require('https');

let server =https.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("HTTPS Secure Hello World");

    res.end();
})

server.listen(443,()=>console.log("Server Started"))