"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FloorController_1 = require("../controllers/FloorController");
const router = (0, express_1.Router)();
router.get("/:wingInShort", FloorController_1.getFloors);
exports.default = router;
