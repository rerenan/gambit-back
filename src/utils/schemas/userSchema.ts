import joi from "joi";

export const loginUserSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required(),
});

export const registerUserSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).messages({
        'any.only': "password and confirmPassword they're not the same"
    })
});