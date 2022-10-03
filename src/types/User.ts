import { User } from "@prisma/client";

export type UserInsertData = Omit<User, "id" | "createdAt">;
export type UserLoginData = Omit<User, "id" | "createdAt" | "username">;

export interface UserSignUpData {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
};