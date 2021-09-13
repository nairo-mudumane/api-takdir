const getUserList = require('./getUserList');
const getProductList = require('./getProductList');
const Route = require('./Routes');
module.exports = (App) => {
  App.get('/', (req, res) => res.send('No body returned for response'));

  getUserList(App);
  getProductList(App);
  App.get('/routes', Route.get);

  App.get('/*', (req, res) => res.redirect('/'));
};
