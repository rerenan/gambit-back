import prisma from "../config/database";
import { ProfileUpdateData } from "../types/Profile";

function insert(userId:number) {
    return prisma.profile.create({
        data:{
            userId
        }
    })
}

function getByUserId(userId: number){
    return prisma.profile.findUnique({
        where: {
            userId
        }
    })
}

function update(updateData:ProfileUpdateData, userId: number) {
    return prisma.profile.update({
        where:{
            userId
        },
        data: {
            ...updateData
        }
    })
}

export const profileRepository = {
    insert,
    getByUserId,
    update
}