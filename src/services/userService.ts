import { profileRepository } from './../repositories/profileRepository';
import bcrypt from "bcrypt";

import { userRepository } from "../repositories/userRepository";
import generateUserToken from "../utils/generateToken";
import { UserSignUpData, UserLoginData } from "./../types/User";

async function register(userData:UserSignUpData) {
    const {
        username,
        email,
        password,
        confirmPassword
    } = userData;

    if(password !== confirmPassword) throw {
        type: "unprocessableEntity", 
        message: "password and confirmPassword they're not the same"
    };

    const sameEmail = await userRepository.findByEmail(email);
    const sameUserName = await userRepository.findByUserName(username);

    if(sameEmail) throw {
        type: "conflict", 
        message: "This email already used."
    };

    if(sameUserName) throw {
        type: "conflict", 
        message: "This username already used."
    };

    const passwordHash = bcrypt.hashSync(password, 10);

    const userCreated = await userRepository.insert({
        username,
        email, 
        password: passwordHash
    });
    
    await profileRepository.insert(userCreated.id);

    return userCreated;
}

async function login(userData:UserLoginData) {
    const {
        email,
        password,
    } = userData;

    const user = await userRepository.findByEmail(email);
    if(!user) throw {type: "unauthorized", message: "Email or password incorrect"};

    const validatePassword = bcrypt.compareSync(password, user.password);
    if(!validatePassword) throw {type: "unauthorized", message: "Email or password incorrect"};

    const token = generateUserToken(user.id);
    
    return {token};
}

export const userService = {
    register,
    login
}