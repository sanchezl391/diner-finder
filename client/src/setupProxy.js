const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api/current_user', { target: 'http://localhost:5000/' }),
    proxy('/auth/google', { target: 'http://localhost:5000/' }),
    proxy('/api/logout', { target: 'http://localhost:5000/' })
  );
};