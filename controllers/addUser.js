const { newUser } = require("../services/usersServices");

const addUser = async (req, res) => {
  console.log(req.body);
  res.status(201).json(await newUser(req.body));
};

module.exports = addUser;
