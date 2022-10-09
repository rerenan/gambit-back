import { profileRepository } from './../repositories/profileRepository';

async function getByUserId(userId:number) {
    const profile = await profileRepository.getByUserId(userId)
    if(!profile) throw {type:"notFound", message: "Profile not found"}
    return profile;
}

export const profileService = {
    getByUserId
}