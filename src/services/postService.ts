import { userRepository } from './../repositories/userRepository';
import { postRepository } from './../repositories/postRepository';
import { PostInsertData } from './../types/Post';


async function create(postData:PostInsertData) {

    const postCreated = await postRepository.insert(postData);

    return postCreated;
}

async function get(userId:number) {
    const posts = await postRepository.get(userId);
    const formatedPosts = posts.map((post)=> {
        return {
            id: post.id,
            userId: post.user.id,
            username: post.user.username,
            profileImage: post.user.profile[0].profilePicture,
            text: post.text
        }
    })
    return formatedPosts;
}

async function getByUser(userId: number) {
    const user = await userRepository.findById(userId);
    if(!user) throw {type: "notFound", message: "User not found"}
    const posts = await postRepository.getByUserId(userId);
    const formatedPosts = posts.map((post)=> {
        return {
            id: post.id,
            userId: post.user.id,
            username: post.user.username,
            profileImage: post.user.profile[0].profilePicture,
            text: post.text
        }
    });
    return formatedPosts;
}

export const postService = {
    create,
    get,
    getByUser
}