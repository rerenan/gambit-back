import { Request, Response } from "express";

export async function followUser(req: Request, res: Response) {
    res.sendStatus(200);
}

export async function unfollowUser(req: Request, res: Response) {
    res.sendStatus(200);
}