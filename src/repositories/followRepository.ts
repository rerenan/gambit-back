import prisma from "../config/database";

async function insert(followerId: number, followedId: number) {
    return prisma.follow.create({
        data:{
            userIdFollower: followerId,
            userIdFollowed: followedId
        }
    })
}
async function remove(followerId: number, followedId: number) {
    return prisma.follow.delete({
        where:{
            userIdFollowed_userIdFollower:{
                userIdFollower: followerId,
                userIdFollowed: followedId
            }
        }
    })
}

export const followRepository = {
    insert,
    remove
}