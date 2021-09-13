const db = require('../utils/config').defaultDatabase;
const user_list_ref = 'user_list';

exports.get = (req, res, next) => {
  const list = [];
  const getUserList = async () => {
    await db.ref(user_list_ref).once('value', (snapshot) => {
      snapshot.forEach((user) => {
        list.push(user.val());
      });
      return res.status(200).send(list);
    });
  };
  getUserList();
};

exports.getById = async (req, res, next) => {
  let user_uid = req.params.user_uid;
  const userById = [];
  const list = [];
  await db.ref(user_list_ref).once('value', (snapshot) => {
    snapshot.forEach((user) => {
      list.push(user.val());
    });
    list.forEach((user) => {
      if (user.uid === user_uid) {
        userById.push(user);
      }
    });
    return res.status(200).send(userById);
  });
};

exports.post = (req, res) => {
  const data = req.body;
  if (!data)
    return res.status(204).send([{ status: 'ERROR', msg: 'No Content' }]);

  const postUser = async () => {
    const { v4: uuidv4 } = require('uuid');
    data['uid'] = uuidv4();
    await db
      .ref(user_list_ref)
      .child(data.uid)
      .set(data)
      .catch((err) => console.log(err));
  };
  postUser();
  return res.status(200).send([{ status: 'OK', msg: 'Created' }]);
};

exports.put = (req, res, next) => {
  const user_uid = req.params.user_uid;
  res
    .status(201)
    .send([{ status: 'OK', msg: `rota update user by id: ${user_uid}` }]);
};

exports.delete = (req, res, next) => {
  const user_uid = req.params.user_uid;
  res
    .status(201)
    .send([{ status: 'OK', msg: `rota delete by id: ${user_uid}` }]);
};
