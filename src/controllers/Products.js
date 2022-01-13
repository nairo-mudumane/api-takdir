const db = require("../utils/config").defaultDatabase;
const product_list_ref = "product_list";

exports.getAll = async (req, res, next) => {
  const list = [];

  try {
    await db.ref(product_list_ref).once("value", (snapshot) => {
      snapshot.forEach((product) => {
        list.push(product.val());
      });
      if (list.length === 0) {
        const data = { error: true, status: 404, message: "no product found" };
        return res.status(404).json(data);
      } else {
        const data = { error: false, status: 200, data: list };
        return res.status(200).json(data);
      }
    });
  } catch (err) {
    const data = { error: true, message: err.message };
    return res.status(400).json(data);
  }
};

exports.getById = async (req, res, next) => {
  const { id_product } = req.params;
  const list = [];

  try {
    await db.ref(product_list_ref).once("value", (snapshot) => {
      snapshot.forEach((product) => {
        list.push(product.val());
      });

      if (list.length === 0) {
        const data = { error: true, status: 404, message: "no product found" };
        return res.status(404).json(data);
      } else {
        const data = { error: false, status: 200 };
        list.forEach((product) => {
          if (product.uid === id_product) {
            return (data["data"] = product);
          }
        });
        return res.status(200).json(data);
      }
    });
  } catch (err) {
    const data = { error: true, message: err.message };
    return res.status(400).json(data);
  }
};

exports.new = async (req, res, next) => {
  const req_body = req.body;

  if (!req_body["name"]) {
    const data = { error: true, status: 400, message: "no body sent" };
    return res.status(400).json(data);
  }

  try {
    const { v4: uuidv4 } = require("uuid");
    req_body["uid"] = uuidv4();
    await db.ref(product_list_ref).child(req_body.uid).set(req_body);
    const data = { error: false, status: 201, message: "created" };
    return res.status(201).json(data);
  } catch (err) {
    const data = { error: true, message: err.message };
    return res.status(400).json(data);
  }
};

// exports.put = (req, res, next) => {
//   const product_uid = req.params.product_uid;
//   res
//     .status(201)
//     .send([{ status: "OK", msg: `rota update product by id: ${product_uid}` }]);
// };

// exports.delete = (req, res, next) => {
//   const product_uid = req.params.user_uid;
//   res
//     .status(201)
//     .send([{ status: "OK", msg: `rota delete by id: ${user_uid}` }]);
// };
