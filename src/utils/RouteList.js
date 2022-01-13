exports.get = (req, res) => {
  return res.status(200).send(routes);
};

const routes = [
  {
    function: "get products list",
    method: "get",
    url: "/products",
    params: false,
  },
  {
    function: "get product by id",
    method: "get",
    url: "/products/:id_product",
    params: true,
  },
  {
    function: "post new product",
    method: "post",
    url: "/products/new",
    params: true,
  },
];
