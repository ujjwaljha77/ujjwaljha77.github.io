import http from 'http'

const server = http.createServer((req,res)=>{
    res.end("Good Morning");
});

server.listen(8081, () =>{
    console.log("server started");
});