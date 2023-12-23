const Joi = require("joi");

const messageSchema = Joi.object({
  text: Joi.string().required(),
  name: Joi.string().required(),
  id: Joi.string().required(),
  socketID: Joi.string().required(),
});

const validateMessage = ({ body }, res, next) => {
  const { error } = messageSchema.validate(body);

  if (error) return res.status(error.status).json(error.details[0].message);

  next();
};

module.exports = {
    validateMessage,
};
