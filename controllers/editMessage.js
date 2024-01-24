const { updateMessage } = require("../services/messagesServices");

const editMessage = async (req, res) => {
  res.status(201).json(await updateMessage(req.params.id, req.body));
};

module.exports = editMessage;
