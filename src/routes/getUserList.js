const UserListController = require('../controllers/UserListController');
module.exports = (App) => {
  App.get('/users', UserListController.get);
  App.get('/user/:user_uid', UserListController.getById);
};
