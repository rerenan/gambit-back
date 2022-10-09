import joi from "joi";
import { ProfileUpdateData } from "../../types/Profile";

export const updateProfileSchema = joi.object<ProfileUpdateData>({
    profilePicture: joi.string().uri(),
    biography: joi.string(),
    banner: joi.string().uri()
})
