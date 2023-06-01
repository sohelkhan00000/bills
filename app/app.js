const http = require('http')
const express =require('express')
const path = require('path');

let app =express();
app.use(express.static('public'))
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(4000,()=>{
    console.log("server started")
})
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(4000,()=>{
//     console.log('server startred')
// })
