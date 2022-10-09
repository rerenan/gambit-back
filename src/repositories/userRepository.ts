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
    const result = prisma.user.findUnique({
        where: {
            email
        }
    });
    return result;
}

function findByUserName(username: string) {
    const result = prisma.user.findUnique({
        where: {
            username
        }
    });
    return result;
}

function findById(id: number) {
    const result = prisma.user.findUnique({
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