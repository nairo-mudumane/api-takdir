const ProductListController = require('../controllers/ProductListController');
module.exports = (App) => {
  App.get('/products', ProductListController.get);
  App.get('/product/:product_uid', ProductListController.getById);
  App.post('/products', ProductListController.post);
};
