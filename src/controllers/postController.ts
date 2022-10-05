import { Request, Response } from "express";

export async function createPost(req: Request, res: Response) {
    res.sendStatus(200);
}

export async function getAllPosts(req: Request, res: Response) {
    res.sendStatus(200);
}