const http = require('http');

console.log(process.env);

const PORT = process.env.FASTIFY_PORT;
const TEST_ENV = process.env.TEST_ENV;

if (!PORT) {
  throw new Error('환경변수 FASTIFY_PORT가 설정되어 있지 않습니다.');
}
if (!TEST_ENV) {
  throw new Error('환경변수 TEST_ENV가 설정되어 있지 않습니다.');
}

const server = http.createServer((req, res) => {
  res.end('Hello, Docker!');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
