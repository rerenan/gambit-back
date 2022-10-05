import prisma from "../config/database";
import { UserInsertData } from "../types/User";

async function insert(userData: UserInsertData) {
    const {username, email, password } = userData;

    return await prisma.user.create({
        data: {
            username,
            email,
            password
        }
    });
};

async function findByEmail(email: string) {
    const result = await prisma.user.findUnique({
        where: {
            email
        }
    });
    return result;
}

async function findByUserName(username: string) {
    const result = await prisma.user.findUnique({
        where: {
            username
        }
    });
    return result;
}

async function findById(id: number) {
    const result = await prisma.user.findUnique({
        where: {
            id
        }
    });
    return result;
}

export const userRepository = {
    insert,
    findByEmail,
    findByUserName,
    findById
}