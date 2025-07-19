const joi = require("joi")

const addBusinessSchema = joi.object({
    name:joi.string().required().messages({
        "string.base" : "name must be string",
        "any.required":"name is required"
    })
})

module.exports = {addBusinessSchema}