import { Router } from "express";
import { addAsset, getAssetById, getAssets, updateAsset } from "../controllers/AssetController";
import { getWings } from "../controllers/WingController";
import { getFloors } from "../controllers/FloorController";

const router = Router();

router.get("/", getAssets);
router.post("/", addAsset);
router.get("/:id", getAssetById);
router.patch("/:id", updateAsset);
router.get("/wings", getWings);
router.get("/floors/:wingId", getFloors);

export default router;