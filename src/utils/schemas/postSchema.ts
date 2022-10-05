import joi from "joi";
import { PostContentData } from "../../types/Post";

export const postSchema = joi.object<PostContentData>({
    text: joi.string().max(350).required()
})