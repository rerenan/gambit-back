import { postRepository } from './../repositories/postRepository';
import { PostInsertData } from './../types/Post';


async function create(postData:PostInsertData) {

    const postCreated = await postRepository.insert(postData);

    return postCreated;
}

async function get(userId:number) {
    const posts = await postRepository.get(userId);

    return posts;
}

export const postService = {
    create,
    get
}