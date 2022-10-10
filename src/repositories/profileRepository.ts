import prisma from "../config/database";
import { ProfileUpdateData } from "../types/Profile";

const defaultBanner = "https://funent.com/images/template/page-banner-default.jpg"

function insert(userId: number) {
    return prisma.profile.create({
        data:{
            userId,
            banner: defaultBanner

        }
    })
}

function getByUserId(userId: number){
    return prisma.profile.findUnique({
        where: {
            userId
        },
        include: {
            user:{
                select:{
                    followers:{
                        select:{
                            userIdFollower: true
                        }
                    }
                }
            }
        }

    })
}

function update( userId: number, updateData:ProfileUpdateData) {
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