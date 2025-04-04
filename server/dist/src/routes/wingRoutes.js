"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WingController_1 = require("../controllers/WingController");
const router = (0, express_1.Router)();
router.get("/", WingController_1.getWings);
exports.default = router;
