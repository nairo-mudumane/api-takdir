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
