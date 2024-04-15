import { Router } from "express";
import usersRouter from "./users.mjs";
import postsRouter from './posts.mjs'

const router = Router();

router.use(usersRouter)
router.use(postsRouter)

export default router;