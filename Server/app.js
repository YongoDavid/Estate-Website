console.log('running another server for this')

// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type' , 'Text/plain')
// })

// server.listen(1000, 'localhost', () => {
//     console.log('server listening on port 1000')
// })

const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'Text/plain')
    res.writeHead(200)
    res.write('Welcome')
    res.end()


})



server.listen(3000, 'localhost' , () => {
    console.log('Listening on port 3000')
})

// TRY SETTING UP SERVER 