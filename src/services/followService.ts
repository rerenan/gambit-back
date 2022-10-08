import { userRepository } from './../repositories/userRepository';
import { followRepository } from "../repositories/followRepository"


async function follow(followerId: number, followedId: number) {
    const followerUser = await userRepository.findById(followedId);
    const followedUser = await userRepository.findById(followerId);

    if(!followerUser || !followedUser) throw {type: "notFound", message: "Not found user(s)"}

    if(followerId === followedId) throw {type: "conflict", message: "Can't follow yourself"}
    const alreadyFollow = await followRepository.findByFollowerIdAndFollowedId(followerId, followedId);
    if(alreadyFollow) throw {type: "conflict", message: "Already follow"}

    await followRepository.insert(followerId, followedId)
}

async function unfollow(followerId: number, followedId: number) {
    const unfollowerUser = await userRepository.findById(followedId);
    const unfollowedUser = await userRepository.findById(followerId);

    if(!unfollowerUser || !unfollowedUser) throw {type: "notFound", message: "Not found user(s)"}

    if(followerId === followedId) throw {type: "conflict", message: "Can't unfollow yourself"}

    const alreadyunfollow = await followRepository.findByFollowerIdAndFollowedId(followerId, followedId);
    if(!alreadyunfollow) throw {type: "conflict", message: "Don't follow"}

    await followRepository.remove(followerId, followedId)
}

export const followService = {
    follow,
    unfollow
}