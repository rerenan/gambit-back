import { PostInsertData } from "./../types/Post";
import prisma from "../config/database";

function insert(postData: PostInsertData) {
  const { userId, text } = postData;
  return prisma.post.create({
    data: {
      userId,
      text,
    },
  });
}

function get(userId: number) {
  return prisma.post.findMany({
    where: {
      OR: [
        {
          user: {
            followers: {
              some: {
                userIdFollower: userId,
              },
            },
          },
        },
        {
          userId
        }
      ],
    },
    select: {
      id: true,
      user: {
        select: {
          id: true,
          username: true,
          profile: {
            select: {
              profilePicture: true,
            },
          },
        },
      },
      text: true,
    },
    orderBy:{
        id: "desc"
    }
  });
}

function getByUserId(userId: number){
  return prisma.post.findMany({
    where:{
      userId
    },
    orderBy:{
      id: "desc"
    }
  })
}

export const postRepository = {
  insert,
  get,
  getByUserId
};
