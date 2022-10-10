import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profileController";
import tokenMiddleware from "../middlewares/tokenMiddleware";

const profileRouter = Router();

profileRouter.get("/:username", getProfile);

profileRouter.put("/:id", tokenMiddleware, updateProfile)

export default profileRouter;