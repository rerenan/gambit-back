import { ProfileUpdateData } from './../types/Profile';
import { profileRepository } from './../repositories/profileRepository';

async function getByUserId(userId:number) {
    const profile = await profileRepository.getByUserId(userId);
    if(!profile) throw {type:"notFound", message: "Profile not found"};
    return profile;
}

async function update( postUserId:number, userId:number, updateData: ProfileUpdateData) {
    if(postUserId !== userId) throw {type:"unauthorized", message: "unauthorized"}
    
    const profile = await profileRepository.getByUserId(userId);
    if(!profile) throw {type:"notFound", message: "Profile not found"};

    const updatedProfile = await profileRepository.update(userId, updateData)
    return updatedProfile;
}


export const profileService = {
    getByUserId,
    update
}