import { ProfileUpdateData } from './../types/Profile';
import { profileRepository } from './../repositories/profileRepository';
import { userRepository } from '../repositories/userRepository';

async function getByUsername(username:string) {
    const user = await userRepository.findByUserName(username);
    if(!user) throw {type:"notFound", message: "User not found"};
    const profile = await profileRepository.getByUserId(user.id);
    delete profile.createdAt;
    const profileFormated = {
        ...profile,
        followers: profile.user.followers
    }
    delete profileFormated.user;
    return profileFormated;
}

async function update( postUserId:number, userId:number, updateData: ProfileUpdateData) {
    if(postUserId !== userId) throw {type:"unauthorized", message: "unauthorized"}
    
    const profile = await profileRepository.getByUserId(userId);
    if(!profile) throw {type:"notFound", message: "Profile not found"};

    const updatedProfile = await profileRepository.update(userId, updateData);
    return updatedProfile;
}


export const profileService = {
    getByUsername,
    update
}