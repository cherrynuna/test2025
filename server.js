const http = require('http');

const PORT = process.env.FASTIFY_PORT || 3000;

const server = http.createServer((req, res) => {
  res.end('Hello, Docker!');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
