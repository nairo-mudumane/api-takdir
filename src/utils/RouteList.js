exports.get = (req, res) => {
  return res.status(200).send(routes);
};

const routes = [
  {
    function: "get products list",
    method: "get",
    url: "/products",
    params: false,
    body: false,
  },
  {
    function: "get product by id",
    method: "get",
    url: "/products/:id_product",
    params: true,
    body: false,
  },
  {
    function: "post new product",
    method: "post",
    url: "/products/new",
    params: false,
    body: {
      name: "str | required",
      price: "float | required",
      total_available: "int | required",
      is_free: "bool | required",
      is_special: "bool | required",
      description: "str | required",
      description_short: "str | optional",
      stars: "str | required",
      posted_at: "date | required",
      expires_at: "date | optional",
      bonus: "arr | optional",
      cover_image: "img | required",
      images: "arr | required",
    },
  },
];
