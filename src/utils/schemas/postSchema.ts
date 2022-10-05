import joi from "joi";
import { PostContentData } from "../../types/Post";

export const postSchema = joi.object<PostContentData>({
    text: joi.string().length(350).required()
})