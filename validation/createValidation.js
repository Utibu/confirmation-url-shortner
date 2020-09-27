const Joi = require("joi")

const createValidation = body => {
    const schema = Joi.object({
        link: Joi.string().required()
    })
    return schema.validate(body, { allowUnknown: false })
}

module.exports = { createValidation }