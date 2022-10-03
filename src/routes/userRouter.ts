import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userController";
import schemaMiddleware from "../middlewares/schemaMiddleware";
import { loginUserSchema, registerUserSchema } from "../utils/schemas/userSchema";

const userRouter = Router();

userRouter.post("/", schemaMiddleware(loginUserSchema), loginUser);
userRouter.post("/register", schemaMiddleware(registerUserSchema), registerUser);

export default userRouter;