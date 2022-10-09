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

function getAll(postData:PostInsertData) {
    return  prisma.post.findMany({})
}

export const postRepository = {
    insert,
    getAll
}