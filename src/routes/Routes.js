// Route list
exports.get = (req, res) => {
  res.send([
    {
      name: `user list`,
      method: `GET`,
      url: `hostname/users/`,
    },
    {
      name: `user by ID`,
      method: `GET`,
      url: `hostname/user/:user_id`,
    },
    {
      name: `post new user`,
      method: `POST`,
      url: `hostname/users/`,
    },
    {
      name: `product list`,
      method: `GET`,
      url: `hostname/products/`,
    },
    {
      name: `product by ID`,
      method: `GET`,
      url: `hostname/product/:product_id`,
    },
    {
      name: `post new product`,
      method: `POST`,
      url: `hostname/products/`,
    },
    {
      name: `login user`,
      method: `POST`,
      url: `hostname/login/user`,
    },
  ]);
};
