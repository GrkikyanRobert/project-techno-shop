import express from "express";
import deviceRouter from "./deviceRouter";
import userRouter from "./userRouter";
import brandRouter from "./brandRouter";
import typeRouter from "./typeRouter";

const router = express.Router();
/* GET home page. */
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

export default router
