// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type' , 'Text/plain')
// })
// server.listen(1000, 'localhost', () => {
//     console.log('server listening on port 1000')
// })
// const http = require('http')
// const PORT = 3000
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'Text/plain')
//     res.writeHead(200)
//     res.write('Welcome to home page')
//     res.end()
// })
// server.listen(3000, 'localhost' , () => {
//     console.log('Listening on port 3000')
// })
// TRY SETTING UP SERVER 

// MAIN EXPRESS SERVER

const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3000);

app.get('/' , (req,res)=>{
    // res.sendFile('index.html' , {root: __dirname , '..' , 'client'});
    // app.use(express.static(path.join(__dirname, '..' , 'client')));
});
app.use((req,res)=>{
    res.status(404).sendFile('404.html')
});

