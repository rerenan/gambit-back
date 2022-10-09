import { profileService } from './../services/profileService';
import { Request, Response } from "express";

export async function getProfile(req: Request, res: Response) {
    const {username} = req.params;
    
    const profile = await profileService.getByUsername(username);
    res.status(200).send(profile);
}

export async function updateProfile(req: Request, res: Response) {
    const {id: postUserId} = req.params;
    const {id: userId} = res.locals.user;
    const updateProfileData = req.body;

    const updatedProfile = await profileService.update(Number(postUserId), Number(userId), updateProfileData);
    res.status(200).send(updatedProfile);
}