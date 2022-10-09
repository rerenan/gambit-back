import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profileController";

const profileRouter = Router();

profileRouter.get("/:id", getProfile)
profileRouter.put("/:id", updateProfile)

export default profileRouter;