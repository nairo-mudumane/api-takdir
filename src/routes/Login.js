const LoginUserController = require('../controllers/LoginUserController');
module.exports = (App) => {
  App.post('/login/user', LoginUserController.post);
};
