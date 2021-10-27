const http = require('http')
const host = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('ola mundo\nMeu primeiro script')
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
})