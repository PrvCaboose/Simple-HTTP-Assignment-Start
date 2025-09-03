const http = require('http');

const htmlHandler = require('./htmlResponses');
const jsonHandler = require('./jsonResponses');
const textHandler = require('./textResponses');
const imageHandler = require('./imageResponses');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJson':
      jsonHandler.getHelloJson(request, response);
      break;
    case '/timeJson':
      jsonHandler.getTimeJson(request, response);
      break;
    case '/dankmemes':
      imageHandler.getImage(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`listening on port 127.0.0.1:${port}`);
});
