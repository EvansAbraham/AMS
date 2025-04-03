"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLapa = exports.getLapa = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getLapa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const search = (_a = req.query.search) === null || _a === void 0 ? void 0 : _a.toString();
        if (search) {
            const lapa = yield prisma.lAPADB.findMany({
                where: {
                    OR: [
                        { assetBarcode: { contains: search, mode: 'insensitive' } },
                        { wing: { contains: search, mode: 'insensitive' } },
                        { location: { contains: search, mode: 'insensitive' } },
                        { riskAssessmentWoNo: { contains: search, mode: 'insensitive' } },
                        { room: { contains: search, mode: 'insensitive' } },
                        { labName: { contains: search, mode: 'insensitive' } },
                        { lApA: { contains: search, mode: 'insensitive' } },
                    ]
                }
            });
            res.json(lapa);
            return;
        }
        const lapa = yield prisma.lAPADB.findMany();
        res.json(lapa);
    }
    catch (error) {
        console.error("Error retrieving the LAPA data:", error);
        res.status(500).json({ message: "Error retrieving the LAPA data!" });
    }
});
exports.getLapa = getLapa;
const updateLapa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { assetBarcode } = req.params;
        const updatedData = req.body;
        console.log("Updated data:", updatedData);
        if (!updatedData || Object.keys(updatedData).length === 0) {
            res.status(400).json({ message: "No data provided to update!" });
        }
        const lapa = yield prisma.lAPADB.findUnique({
            where: { assetBarcode },
        });
        if (!lapa) {
            res.status(404).json({ message: "LAPA record not found!" });
        }
        const updatedLapa = yield prisma.lAPADB.update({
            where: { assetBarcode },
            data: updatedData,
        });
        res.json(updatedLapa);
    }
    catch (error) {
        console.error("Error updating the LAPA data:", error);
        res.status(500).json({ message: "Error updating the LAPA data!" });
    }
});
exports.updateLapa = updateLapa;
