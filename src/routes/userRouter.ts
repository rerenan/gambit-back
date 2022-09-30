import { Router } from "express";
import { loginUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/", loginUser)

export default userRouter;