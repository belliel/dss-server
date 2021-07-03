import express from "express"
import { body } from "express-validator";
import postControllers from "../controllers/post.controllers";
import { isNotLatin, isNotOnlyNumbers } from "../utils/validators";

const postsRouter = express.Router()

postsRouter.get(
    "/posts",
    postControllers.postList
)

postsRouter.post(
    "/posts",
    body("username").custom(isNotLatin).custom(isNotOnlyNumbers),
    body("text").trim().notEmpty().withMessage("text is empty"),
    postControllers.postCreate
)

export default postsRouter