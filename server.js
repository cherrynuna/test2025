const http = require('http');

if (!process.env.FASTIFY_PORT) {
  throw new Error('FASTIFY_PORT 환경변수가 설정되어 있지 않습니다!');
}

const PORT = process.env.FASTIFY_PORT;

const server = http.createServer((req, res) => {
  res.end('Hello, Docker!');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
