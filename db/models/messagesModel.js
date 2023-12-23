const { Schema, model } = require("mongoose");

const messages = new Schema(
  {
    text: {
      type: String,
      required: [true, "Message text is required"],
    },
    name: {
      type: String,
      required: [true, "Username is required"],
    },
    id: {
      type: String,
      required: [true, "Message ID is required"],
    }, 
    socketID: {
      type: String,
      required: [true, "Socket ID is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Messages = model("messages", messages);

module.exports = Messages;
