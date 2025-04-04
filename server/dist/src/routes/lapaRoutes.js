"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LaPaController_1 = require("../controllers/LaPaController");
const router = (0, express_1.Router)();
router.get("/", LaPaController_1.getLapa);
router.patch("/update-lapa/:assetBarcode", LaPaController_1.updateLapa);
exports.default = router;
