const Messages = require("../db/models/messagesModel");

const getAllMessages = async () => await Messages.find({});

const newMessage = async (body) => await Messages(body).save();

module.exports = {
  getAllMessages,
  newMessage,
};
