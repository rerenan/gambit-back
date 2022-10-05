import { Router } from "express";
import { createPost } from "../controllers/postController";
import schemaMiddleware from "../middlewares/schemaMiddleware";
import tokenMiddleware from "../middlewares/tokenMiddleware";
import { postSchema } from "../utils/schemas/postSchema";

const postRouter = Router();

postRouter.post("/create",tokenMiddleware, schemaMiddleware(postSchema), createPost);

export default postRouter;