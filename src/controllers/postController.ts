import { Request, Response } from "express";
import { postService } from "../services/postService";

export async function createPost(req: Request, res: Response) {
    const {text} = req.body;
    const {id: userId} = res.locals.user;

    const postCreated = await postService.create({userId, text})
    res.status(200).send(postCreated);
}

export async function getAllPosts(req: Request, res: Response) {
    res.sendStatus(200);
}