const joi = require("joi")


const stockLogSchema = joi.object({
    action:joi.string().valid("IN","OUT").required().messages({
        "string.base":"action must be string",
        "any.only":"action must be either 'IN' or 'OUT'",
        "any.required":"action is required"

    }),
    quantity:joi.number().required().messages({
        "number.base":"quantity must be string",
        "any.required":"quantity is required"
    })
})


module.exports = stockLogSchema