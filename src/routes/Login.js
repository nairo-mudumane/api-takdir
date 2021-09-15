const LoginController = require('../controllers/LoginController');
module.exports = (App) => {
  App.post('/login', LoginController.post);
};
