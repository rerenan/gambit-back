import { Request, Response } from "express";
import { followService } from "../services/followService";

export async function followUser(req: Request, res: Response) {
    const {id: followedId} = req.params
    const {id: followerId} = res.locals.user
    
    await followService.follow(followerId, Number(followedId))
    
    res.sendStatus(200);
}

export async function unfollowUser(req: Request, res: Response) {
    const {id: unfollowedId} = req.params
    const {id: unfollowerId} = res.locals.user
    
    await followService.unfollow(unfollowerId, Number(unfollowedId))
    
    res.sendStatus(200);
}