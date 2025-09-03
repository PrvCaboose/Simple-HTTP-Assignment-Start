const text = require('./textResponses.js');

const getHelloJson = (request, response) => {
  const helloJson = {
    message: text.hello,
  };

  const stringMessage = JSON.stringify(helloJson);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

const getTimeJson = (request, response) => {
  const timeJson = {
    time: text.getTimeString(),
  };

  const stringMessage = JSON.stringify(timeJson);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

module.exports = {
  getHelloJson,
  getTimeJson,
};
