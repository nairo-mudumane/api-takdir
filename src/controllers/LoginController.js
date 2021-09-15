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
    const validUser = [];
    userList.forEach((user) => {
      if (user.email === data.email && user.password === data.password) {
        validUser.push(user.uid);
      }
    });
    return validUser
      ? res.status(404).send([{ error: true, msg: 'not found' }])
      : res.status(200).send([{ error: false, data: validUser }]);
  }

  getUserList();
};
