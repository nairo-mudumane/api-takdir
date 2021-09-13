const getUserList = require('./getUserList');
const getProductList = require('./getProductList');
module.exports = (App) => {
  getUserList(App);
  getProductList(App);
};
