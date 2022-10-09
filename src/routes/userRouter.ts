import { Router } from "express";
import { getUserData, loginUser, registerUser } from "../controllers/userController";
import schemaMiddleware from "../middlewares/schemaMiddleware";
import tokenMiddleware from "../middlewares/tokenMiddleware";
import { loginUserSchema, registerUserSchema } from "../utils/schemas/userSchema";

const userRouter = Router();

userRouter.post("/", schemaMiddleware(loginUserSchema), loginUser);
userRouter.post("/register", schemaMiddleware(registerUserSchema), registerUser);
userRouter.get("/me", tokenMiddleware, getUserData)

export default userRouter;