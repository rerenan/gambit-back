import { Router } from "express";
import tokenMiddleware from "../middlewares/tokenMiddleware";
import followRouter from "./folowRouter";
import postRouter from "./postsRouter";
import profileRouter from "./profileRouter";
import userRouter from "./userRouter";

const router = Router();

router.use("/user", userRouter)
router.use("/posts", postRouter)
router.use("/", tokenMiddleware, followRouter);
router.use("/profile", tokenMiddleware, profileRouter)

export default router;