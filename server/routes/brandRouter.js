import express from "express";

import BrandController from "../controllers/BrandController";


const router = express.Router();

router.post('/',BrandController.create);
router.get('/',BrandController.getAll );

export default router;
