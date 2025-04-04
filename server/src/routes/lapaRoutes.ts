import { Router } from "express";
import {  getLapa, updateLapa } from '../controllers/LaPaController';

const router = Router()

router.get("/", getLapa);
router.patch("/update-lapa/:assetBarcode", updateLapa);

export default router;
