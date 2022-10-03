import { UserSignUpData, UserInsertData } from './../types/User';


async function register(userData:UserSignUpData) {
    const {
        email,
        password,
        confirmPassword
    } = userData;

    //UseCases
    //Call repository
    return;
}

async function login(userData:UserInsertData) {
    const {
        email,
        password,
    } = userData;

    //UseCases
    //Call repository
    //Return token
    return;
}

export const userService = {
    register,
    login
}