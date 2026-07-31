const http = require('http');
const data = JSON.stringify({
  fullName: 'Test User',
  phone: '1234567890',
  email: 'test@example.com',
  vehicle: 'Toyota',
  service: 'Test Service',
  message: 'This is a test message.'
});

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  console.log('STATUS', res.statusCode);
  console.log('HEADERS', JSON.stringify(res.headers));
  res.setEncoding('utf8');
  let response = '';
  res.on('data', (chunk) => {
    response += chunk;
  });
  res.on('end', () => {
    console.log('BODY', response);
  });
});

req.on('error', (e) => {
  console.error('problem with request:', e.message);
});

req.write(data);
req.end();
