const { updateUser } = require("../services/usersServices");

const editUser = async (req, res) => {
  res.status(201).json(await updateUser({ userID: req.params.id }, req.body));
};

module.exports = editUser;
