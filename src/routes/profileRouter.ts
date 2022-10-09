import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profileController";

const profileRouter = Router();

profileRouter.get("/:username", getProfile)
profileRouter.put("/:id", updateProfile)

export default profileRouter;