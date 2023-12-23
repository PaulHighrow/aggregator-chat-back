const Joi = require("joi");

const leadSchema = Joi.object({
  a0: Joi.string().empty(""),
  a1: Joi.string().empty(""),
  a2: Joi.string().empty(""),
  b1: Joi.string().empty(""),
  deutsch: Joi.string().empty(""),
  polski: Joi.string().empty(""),
  a1kids: Joi.string().empty(""),
  a2kids: Joi.string().empty(""),
  b1kids: Joi.string().empty(""),
  trials: Joi.string().empty(""),
  trials_de: Joi.string().empty(""),
  trials_pl: Joi.string().empty(""),
  trials_kids: Joi.string().empty(""),
  test: Joi.string().empty(""),
});

const validateLinks = ({ body }, res, next) => {
  const { error } = leadSchema.validate(body);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

module.exports = {
  validateLinks,
};
