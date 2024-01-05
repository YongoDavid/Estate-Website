const http = require('http')
const PORT = 3000
const server = http.createServer((req, res) => {
    console.log('Request Made')
    res.setHeader('Content-Type', 'text/plain')
    console.log(req.url)
    switch (req.url) {
        case '/':
            res.writeHead(200)
            res.write('Homepage')
            res.end()
            break;
        case '/Properties':
            res.writeHead(200)
            res.write('List of Properties')
            res.end()
            break;
        case '/Form':
            res.writeHead(200)
            res.write('Form')
            res.end()
        default:
            res.writeHead(404)
            res.write('404 page')
            res.end()
            break;
    }
})

server.listen(3000, 'localhost', () => {
    console.log(`listing on ${PORT}`)
})