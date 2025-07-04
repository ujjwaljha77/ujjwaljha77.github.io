import http from 'http'

const server = http.createServer((req,res)=>{
    res.end("Request recevied..");
});

server.listen(8083, () =>{
    console.log("server started");
});