import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/", loginUser);
userRouter.post("/register", registerUser);

export default userRouter;