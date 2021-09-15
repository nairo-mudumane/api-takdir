const db = require('../utils/config').defaultDatabase;
const user_list_ref = 'user_list';

exports.post = (req, res, next) => {
  const data = req.body;
  const list = [];

  async function getUserList() {
    await db.ref(user_list_ref).once('value', (snapshot) => {
      snapshot.forEach((user) => {
        list.push(user.val());
      });
      checkUser(list);
    });
  }
  function checkUser(userList) {
    let validUser = '';
    userList.forEach((user) => {
      if (user.email === data.email && user.password === data.password) {
        validUser = user.uid;
      }
    });

    if (validUser === '') {
      return res
        .status(404)
        .send([{ error: true, msg: 'not found', data: [] }]);
    } else {
      return res.status(200).send([{ error: false, uid: validUser }]);
    }
  }

  getUserList();
};
