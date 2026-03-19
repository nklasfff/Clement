const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8000;
const mime = { '.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml' };
http.createServer((req, res) => {
  let p = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  fs.readFile(p, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mime[path.extname(p)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, () => console.log(`Server running on port ${port}`));
