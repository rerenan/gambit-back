import joi from "joi";
import { UserLoginData, UserSignUpData } from "../../types/User";

export const loginUserSchema = joi.object<UserLoginData>({
    email: joi.string().email().required(),
    password: joi.string().min(4).required(),
});

export const registerUserSchema = joi.object<UserSignUpData>({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).messages({
        'any.only': "password and confirmPassword they're not the same"
    })
});