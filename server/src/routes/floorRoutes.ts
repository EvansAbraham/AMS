import { Router } from "express";
import { getFloors } from "../controllers/FloorController";

const router = Router();

router.get("/:wingInShort", getFloors);

export default router;
