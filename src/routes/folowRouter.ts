import { Router } from "express";
import { followUser, unfollowUser } from "../controllers/followController";

const followRouter = Router();

followRouter.post("/follow/:id", followUser);
followRouter.delete("/unfollow/:id", unfollowUser)

export default followRouter;