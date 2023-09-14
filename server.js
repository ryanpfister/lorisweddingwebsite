const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // serve the file in public directory
  const { url } = req;
  if (url.startsWith('/public')) {
    const stream = fs.createReadStream(`.${url}`);
    return stream.pipe(res);
  }
  const files = fs.readdirSync('./public').map(path => `<li><a href="/public/${path}">${path}</a></li>`).join(' ')
  res.setHeader('content-type', 'text/html');
  res.end(`<ol>${files}</ol>`);
}).listen('80', () => {
  console.log('server start at: <http://localhost:80>');
});