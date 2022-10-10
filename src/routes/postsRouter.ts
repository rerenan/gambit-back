import { Router } from "express";
import { createPost, getPosts, getUserPosts } from "../controllers/postController";
import schemaMiddleware from "../middlewares/schemaMiddleware";
import tokenMiddleware from "../middlewares/tokenMiddleware";
import { postSchema } from "../utils/schemas/postSchema";

const postRouter = Router();

postRouter.post("/create",tokenMiddleware, schemaMiddleware(postSchema), createPost);
postRouter.get("/", tokenMiddleware, getPosts);
postRouter.get("/:id", getUserPosts);

export default postRouter;