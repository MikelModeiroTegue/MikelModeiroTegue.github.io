//  Here is a basic introduction to the creation of a local server

const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // console.log(request.url, request.method)

    // set header content type
    response.setHeader('Content-Type', 'text/html')

    let path = './templates/'

    switch (request.url) {
        case '/':
            path += 'index1.html'
            break
        
        // case '/about-me':
        //     // path += 'about.html'
        //     response.setHeader('location', '/about')
        //     break
        
        case '/about':
            path += 'about.html'
            break
        
        default:
            path += '404_err.html'
            break
        
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log("loading response..")
            response.write(data)
            response.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log("listening on port 3000...")
})