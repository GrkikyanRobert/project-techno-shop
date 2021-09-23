import express from "express";
import UserController from "../controllers/UserController";
import multer from 'multer';

import checkRole from "../middleware/checkRoleMiddleware";
import authMiddleware from "../middleware/authMiddleware";


// const apiLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 5
// });
// apiLimiter

const router = express.Router();
router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)

export default router;
