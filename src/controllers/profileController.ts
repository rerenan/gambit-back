import { profileService } from './../services/profileService';
import { Request, Response } from "express";

export async function getProfile(req: Request, res: Response) {
    const {id:userId} = req.params;
    
    const profile = await profileService.getByUserId(Number(userId));
    res.status(200).send(profile);
}

export async function updateProfile(req: Request, res: Response) {
    
    res.sendStatus(200);
}