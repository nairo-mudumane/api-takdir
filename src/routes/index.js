const Routes = require("../utils/RouteList");
const Products = require("./Products");

module.exports = (App) => {
  Products(App);

  App.get("/", (req, res) => res.status(404).json(notFound));
  App.get("/routes", Routes.get);
  App.get("/*", (req, res) => res.redirect("/"));
};

const notFound = {
  error: true,
  status: 200,
  message: "no body returned for response",
};
