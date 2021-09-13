const getUserList = require('./getUserList');
module.exports = (App) => {
  getUserList(App);
};

const getProductList = require('./getProductList');
module.exports = (App) => {
  getProductList(App);
};
