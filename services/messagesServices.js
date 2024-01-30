const Messages = require("../db/models/messagesModel");

const getAllMessages = async () => await Messages.find({});

const newMessage = async (body) => await Messages(body).save();

const updateMessage = async (id, update) =>
  await Messages.findOneAndUpdate(id, update, { new: true });

const deleteMessage = async (id) => await Messages.findOneAndDelete(id);

module.exports = {
  getAllMessages,
  newMessage,
  updateMessage,
  deleteMessage,
};
