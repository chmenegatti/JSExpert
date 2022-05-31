const http = require('http');

const DEFAULT_USER = { username: 'CesarMenegatti', password: '12345678' };

const routes = {
  '/contact:get': (request, response) => {
    response.write('contact us page');
    response.end();
  },

  '/login:post': async (request, response) => {
    // response é um iterador response.write('Loggin has succeded');
    for await(const data of request) {
      const user = JSON.parse(data);
      if (user.username !== DEFAULT_USER.username && user.password !== DEFAULT_USER.password) {
        response.writeHead(401)
        response.write('Loggin failed');
        return response.end();
      }

      response.write('Loggin has succeded');
      return response.end();
    }
    
  },

  default: (request, response) => {
    response.write('Hello World');
    response.end();
  },
}

const handler = function (request, response) {
  const { method, url } = request;
  const routeKey = `${url}:${method.toLowerCase()}`;
  
  const chosen = routes[routeKey] || routes.default;

  response.writeHead(200, { 'Content-Type': 'text/html' });
  
  return chosen(request, response);

  
}

const app = http.createServer(handler)
  .listen(3000, () => console.log('Listening on port 3000'));

module.exports = app;