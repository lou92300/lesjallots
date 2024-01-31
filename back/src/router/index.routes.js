import { Router } from "express"
import postRouter from "./auth.routes.js"

const router = Router();

router.use(postRouter);

export default router;