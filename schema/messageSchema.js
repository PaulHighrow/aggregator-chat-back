const Joi = require("joi");

const messageSchema = Joi.object({
  text: Joi.string().required(),
  username: Joi.string().required(),
  id: Joi.string().required(),
  userID: Joi.string().required(),
  userIP: Joi.string().required(),
  socketID: Joi.string().required(),
  roomLocation: Joi.string().required(),
  isPinned: Joi.bool().optional(),
});

const validateMessage = ({ body }, res, next) => {
  const { error } = messageSchema.validate(body);
  console.log("validating");
  if (error) {
    console.log(error);
    return res.json(error.details[0].message);
  }
  console.log("шота не");
  next();
};

module.exports = {
  validateMessage,
};
