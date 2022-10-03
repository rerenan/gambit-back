import prisma from "../config/database";
import { UserInsertData } from "../types/User";

async function insert(userData: UserInsertData) {
    const {email, password } = userData;

    return await prisma.user.create({
        data: {
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

export const userRepository = {
    insert,
    findByEmail
}