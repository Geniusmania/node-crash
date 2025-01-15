import { error } from 'console';
import http from 'http';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT || 3000;
import fs from 'fs/promises';

//get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname, __filename);


const server = http.createServer(async (req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>HELLO GENIUS MANIA</h1>');
    //console.log(req.method);
    try {
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
                // res.writeHead(200,{'Content-Type': 'text/html'});
                // res.end('<h1> HomePage</h1>')
            }
        } else if (req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'about.html');
            //  res.writeHead(200,{'Content-Type': 'text/html'});
            //  res.end('<h1> AboutPage</h1>')

        } else {
            throw new error('Page not found')
        }

    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('<h1> server error</h1>')
    }


    //    res.end('how are you');
    // ( JSON.stringify({message: 'Server error'}));
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})