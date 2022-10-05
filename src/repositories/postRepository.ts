import { PostInsertData } from './../types/Post';
import prisma from "../config/database";

async function insert(postData:PostInsertData) {
    const {userId, text} = postData;
    return await prisma.post.create({
        data:{
            userId,
            text
        }
    })
}

async function getAll(postData:PostInsertData) {
    return await prisma.post.findMany({})
}

export const postRepository = {
    insert,
    getAll
}