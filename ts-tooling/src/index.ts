/* eslint-disable @typescript-eslint/no-unused-vars */
import { add } from 'add';
import http from 'node:http';
// import { createServer } from "node:http";

/**
 * some comments
 */

const server = http.createServer((req, res) => {
  // console.log(req.method, req.url);
  const url = new URL(req.url || '', `http://${req.headers.host}`);
  const name = 'nnam emeka';
  res.writeHead(200, {
    'content-type': 'text/plain',
  });
  res.end('hello world!\n' + add(3, 2) + '\n');
});

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server running on http://localhost:3000/');
});
