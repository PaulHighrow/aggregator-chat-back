const Messages = require("../db/models/messagesModel");

const getAllMessages = async () => await Messages.find({});

const newMessage = async (body) => await Messages(body).save();

const updateMessage = async (id, update) =>
  await Messages.findByIdAndUpdate(id, update, { new: true });

module.exports = {
  getAllMessages,
  newMessage,
  updateMessage,
};
