import joi from "joi";
import { ProfileUpdateData } from "../../types/Profile";

export const updateProfileSchema = joi.object<ProfileUpdateData>({
    userId: joi.number(),
    profilePicture: joi.string(),
    biography: joi.string(),
    banner: joi.string()
})
