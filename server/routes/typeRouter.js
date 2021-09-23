import express from "express";
import TypeController from "../controllers/TypeController";
import checkRole from "../middleware/checkRoleMiddleware"

const router = express.Router();

// router.post('/', checkRole("ADMIN"), TypeController.create);
router.post('/', TypeController.create);
router.get('/', TypeController.getAll);

export default router;
