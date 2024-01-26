const { deleteMessage } = require("../services/messagesServices");

const removeMessage = async (req, res) => {
  res.status(204).json(await deleteMessage(req.params.id));
};

module.exports = removeMessage;
