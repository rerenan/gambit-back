import { postRepository } from './../repositories/postRepository';
import { PostInsertData } from './../types/Post';


async function create(postData:PostInsertData) {

    const postCreated = await postRepository.insert(postData);

    return postCreated;
}

export const postService = {
    create
}