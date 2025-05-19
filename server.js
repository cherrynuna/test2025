const http = require('http');

const PORT = process.env.FASTIFY_PORT;

if (!PORT) {
  throw new Error('환경변수 FASTIFY_PORT가 설정되어 있지 않습니다.');
}

const server = http.createServer((req, res) => {
  res.end('Hello, Docker!');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
