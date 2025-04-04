import { Router } from "express";
import { getWings } from "../controllers/WingController";

const router = Router();

router.get("/", getWings);

export default router;
