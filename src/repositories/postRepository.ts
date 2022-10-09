import { PostInsertData } from './../types/Post';
import prisma from "../config/database";

function insert(postData:PostInsertData) {
    const {userId, text} = postData;
    return  prisma.post.create({
        data:{
            userId,
            text
        }
    })
}

function get(userId:number) {
    return prisma.post.findMany({
        where:{
            user: {
                followers:{
                    some:{
                        userIdFollower: userId
                    }
                }
            }
        },
        select:{
            user:{
                select: {
                    id: true,
                    username: true,
                    profile: {
                        select:{
                            profilePicture: true
                        }
                    }
                }
            },
            text: true
        }
    })
}

export const postRepository = {
    insert,
    get
}