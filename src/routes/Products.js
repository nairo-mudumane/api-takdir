const Controller = require("../controllers/Products");

module.exports = (App) => {
  App.get("/products", Controller.getAll);
  App.get("/products/:id_product", Controller.getById);
};
