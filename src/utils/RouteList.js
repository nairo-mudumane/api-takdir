exports.get = (req, res) => {
  return res.status(200).send(routes);
};

const routes = [
  {
    function: "Get products list",
    method: "GET",
    url: "/products",
    params: false,
  },
];
