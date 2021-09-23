import express from "express";
import multer from "multer";
import DeviceController from "../controllers/DeviceController"
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();


const upload = multer({storage: multer.memoryStorage()});


router.post('/', upload.single('img'), DeviceController.create);
router.get('/', DeviceController.getAll);
router.get('/one', DeviceController.getOne);
router.post('/del', DeviceController.personDelete);
router.post('/basket', DeviceController.basketCreate);
router.get('/basket', DeviceController.basketAll);
router.post('/basketAdmin', DeviceController.basketAdmin);
router.get('/basketAdmin', DeviceController.basketAdminGet);
router.post('/rate', DeviceController.CreateRateDevice);
router.get('/rateAll', DeviceController.CreateRateDeviceAll);
router.put('/updateId', DeviceController.UpdateRateDevice);

export default router;
