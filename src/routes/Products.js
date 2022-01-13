const Controller = require("../controllers/Products");

module.exports = (App) => {
  App.get("/products", Controller.getAll);
};
