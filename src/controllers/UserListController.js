exports.get = (req, res, next) => {
  res.status(201).send([{ status: 'OK', msg: 'rota get all users' }]);
};

exports.getById = (req, res, next) => {
  let user_uid = req.params.user_uid;
  res
    .status(201)
    .send([{ status: 'OK', msg: `rota get user by id: ${user_uid}` }]);
};

exports.post = (req, res, next) => {
  res.status(201).send([{ status: 'OK', msg: 'rota post new user' }]);
};

exports.put = (req, res, next) => {
  res.status(201).send([{ status: 'OK', msg: 'rota update user by id' }]);
};

exports.delete = (req, res, next) => {
  let user_uid = req.params.user_uid;
  res
    .status(201)
    .send([{ status: 'OK', msg: `rota delete by id: ${user_uid}` }]);
};
