const http = require('http');
const fs = require('fs');
const path = require('path');
const e = require('express');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHeader(200, { 'Content-Type': 'text/html' })
    console.log(req.url);

    if (req.url === '/') {
        const data = fs.readFileSync(path.join(__dirname, 'public', 'index.html'));
        res.end(data.toString())
    } else if (req.url === '/about') {
        res.end("You are at about page");
    } else {
        res.statusCode = 404;
        res.end("Page was not found");
    }
});

server.listen(port, () => {
    console.log(`Server is listing to ${port}`); 
});