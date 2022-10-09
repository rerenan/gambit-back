import prisma from "../config/database";
import { ProfileUpdateData } from "../types/Profile";

async function insert(userId:number) {
    return prisma.profile.create({
        data:{
            userId
        }
    })
}

async function getByUserId(userId: number){
    return prisma.profile.findUnique({
        where: {
            userId
        }
    })
}

async function update(updateData:ProfileUpdateData, userId: number) {
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