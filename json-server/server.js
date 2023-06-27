const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const isAuthorized = (req) => {
  return req.get('X-Auth-Token') ? true : false;
};

server.use(middlewares);
server.use((req, res, next) => {
  if (isAuthorized(req)) {
    next();
  } else {
    res.status(403).json({
      error: 'You are not allowed to access this resource',
    });
  }
});
server.use(router);
server.listen(3500, () => {
  console.log('JSON Server is running');
});
