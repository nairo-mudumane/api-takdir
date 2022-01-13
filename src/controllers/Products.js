const db = require("../utils/config").defaultDatabase;
const product_list_ref = "product_list";

exports.getAll = async (req, res, next) => {
  const list = [];

  try {
    await db
      .ref(product_list_ref)
      .once("value", (snapshot) => {
        snapshot.forEach((product) => {
          list.push(product.val());
        });
      })
      .then(() => {
        const data = { error: false, status: "ok", data: list };
        return res.status(200).send(data);
      });
  } catch (err) {
    const data = { error: true, message: err.message };
    return res.status(400).send(data);
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
        const data = { error: true, message: "not found" };
        return res.status(404).send(data);
      } else {
        list.forEach((product) => {
          if (product.uid === id_product) {
            const data = { error: false, status: "ok" };
            return (data["data"] = product);
          }
        });
        return res.status(200).send(data);
      }
    });
  } catch (err) {
    const data = { error: true, message: err.message };
    return res.status(400).send(data);
  }
};

// exports.post = (req, res, next) => {
//   const data = req.body;
//   if (!data)
//     return res.status(204).send([{ status: "ERROR", msg: "No Content" }]);

//   const postProduct = async () => {
//     const { v4: uuidv4 } = require("uuid");
//     data["uid"] = uuidv4();
//     await db
//       .ref(product_list_ref)
//       .child(data.uid)
//       .set(data)
//       .catch((err) => console.log(err));
//   };
//   postProduct();
//   return res.status(200).send([{ status: "OK", msg: "Created" }]);
// };

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
