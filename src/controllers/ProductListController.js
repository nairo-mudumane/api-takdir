const db = require('../utils/config').defaultDatabase;
const product_list_ref = 'product_list';

exports.get = (req, res, next) => {
  const list = [];
  const getProductList = async () => {
    await db.ref(product_list_ref).once('value', (snapshot) => {
      snapshot.forEach((product) => {
        list.push(product.val());
      });
      return res.status(200).send(list);
    });
  };
  getProductList();
};

exports.getById = async (req, res, next) => {
  let product_uid = req.params.product_uid;
  const productById = [];
  const list = [];
  await db.ref(product_list_ref).once('value', (snapshot) => {
    snapshot.forEach((product) => {
      list.push(product.val());
    });
    list.forEach((product) => {
      if (product.uid === product_uid) {
        productById.push(product);
      }
    });
    return res.status(200).send(productById);
  });
};

exports.post = (req, res, next) => {
  const data = req.body;
  if (!data)
    return res.status(204).send([{ status: 'ERROR', msg: 'No Content' }]);

  const postProduct = async () => {
    const { v4: uuidv4 } = require('uuid');
    data['uid'] = uuidv4();
    await db
      .ref(product_list_ref)
      .child(data.uid)
      .set(data)
      .catch((err) => console.log(err));
  };
  postProduct();
  return res.status(200).send([{ status: 'OK', msg: 'Created' }]);
};

exports.put = (req, res, next) => {
  const product_uid = req.params.product_uid;
  res
    .status(201)
    .send([{ status: 'OK', msg: `rota update product by id: ${product_uid}` }]);
};

exports.delete = (req, res, next) => {
  const product_uid = req.params.user_uid;
  res
    .status(201)
    .send([{ status: 'OK', msg: `rota delete by id: ${user_uid}` }]);
};
