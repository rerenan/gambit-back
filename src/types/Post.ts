import { Post } from "@prisma/client";

export type PostInsertData = Omit<Post, "id" | "createdAt">;

export interface PostContentData {
    text: string
}