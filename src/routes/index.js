const Routes = require("../utils/RouteList");
const Products = require("./Products");

module.exports = (App) => {
  Products(App);

  App.get("/", (req, res) => res.send("No body returned for response"));
  App.get("/routes", Routes.get);
  App.get("/*", (req, res) => res.redirect("/"));
};
