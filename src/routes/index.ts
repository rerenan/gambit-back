import { Router } from "express";
import postRouter from "./postsRouter";
import userRouter from "./userRouter";

const router = Router();

router.use("/user", userRouter)
router.use("/posts", postRouter)

export default router;