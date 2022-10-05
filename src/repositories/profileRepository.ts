import prisma from "../config/database";

async function insert(userId:number) {
    return await prisma.profile.create({
        data:{
            userId
        }
    })
}

export const profileRepository = {
    insert
}