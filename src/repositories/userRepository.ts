import prisma from "../config/database";
import { UserInsertData } from "../types/User";

function insert(userData: UserInsertData) {
    const {username, email, password } = userData;

    return prisma.user.create({
        data: {
            username,
            email,
            password
        }
    });
};

function findByEmail(email: string) {
    return prisma.user.findUnique({
        where: {
            email
        }
    });
}

function findByUserName(username: string) {
    return prisma.user.findUnique({
        where: {
            username
        }
    });
}

function findById(id: number) {
    return prisma.user.findUnique({
        where: {
            id
        }
    });
}

function getUser(id: number) {
    return prisma.user.findUnique({
        where: {
            id
        },
        select:{
            id: true,
            username: true,
            email: true,
            profile: {
                select:{
                    banner: true,
                    biography: true,
                    profilePicture: true
                }
            }
        }
    });
}

export const userRepository = {
    insert,
    findByEmail,
    findByUserName,
    findById,
    getUser
}