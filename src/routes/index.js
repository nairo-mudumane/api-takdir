const getUserList = require('./getUserList');
const getProductList = require('./getProductList');
const Login = require('./Login');
const Route = require('./Routes');
module.exports = (App) => {
  getUserList(App);
  getProductList(App);
  Login(App);

  App.get('/', (req, res) => res.send('No body returned for response'));
  App.get('/routes', Route.get);
  App.get('/*', (req, res) => res.redirect('/'));
};
