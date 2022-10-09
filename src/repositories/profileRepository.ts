import prisma from "../config/database";

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

export const profileRepository = {
    insert,
    getByUserId
}