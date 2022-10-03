import { userService } from './../services/userService';
import { Request, Response } from "express";



export async function loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    
    const token = await userService.login({email, password});

    res.status(200).send(token);
}

export async function registerUser(req: Request, res: Response) {
    const {
        username,
        email,
        password,
        confirmPassword
    } = req.body;

    const createdUser = await userService.register({
        username,
        email,
        password,
        confirmPassword
    })

    res.status(201).send(createdUser);
}