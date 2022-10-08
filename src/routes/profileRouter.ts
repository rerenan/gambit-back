import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profileController";

const profileRouter = Router();

profileRouter.get("/:username", getProfile)
profileRouter.put("/:username", updateProfile)

export default profileRouter;