import prisma from "../config/database";

function insert(followerId: number, followedId: number) {
    return prisma.follow.create({
        data:{
            userIdFollower: followerId,
            userIdFollowed: followedId
        }
    })
}
function remove(followerId: number, followedId: number) {
    return prisma.follow.delete({
        where:{
            userIdFollowed_userIdFollower:{
                userIdFollower: followerId,
                userIdFollowed: followedId
            }
        }
    })
}
function findByFollowerIdAndFollowedId(followerId: number, followedId: number) {
    return prisma.follow.findUnique({
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
    remove,
    findByFollowerIdAndFollowedId
}