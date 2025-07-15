const joi = require("joi")

const registerSchema = joi.object({
    name:joi.string().required().messages({
        "string.base":"name must be string",
        "any.required":"name is required"
    }),
    email:joi.string().email().required().messages({
        "string.base":"email must be string",
        "string.email":"email must be valid email",
        "any.required":"email is required"
    }),
    password:joi.string().required().messages({
        "string.base":"password must be string",
        "any.required":"password is required"
    })
})

const loginSchema = joi.object({
    email:joi.string().email().required().messages({
        "string.base":"email must be string",
        "string.email":"email must be valid email",
        "any.required":"email is required"
    }),
    password:joi.string().required().messages({
        "string.base":"password must be string",
        "any.required":"password is required"
    })
})


module.exports = {registerSchema, loginSchema}