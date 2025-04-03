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
exports.getAssetById = exports.updateAsset = exports.addAsset = exports.getAssets = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAssets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const search = (_a = req.query.search) === null || _a === void 0 ? void 0 : _a.toString();
        if (search) {
            const assets = yield prisma.assetRegister.findMany({
                where: {
                    OR: [
                        { assetBarcode: { contains: search, mode: 'insensitive' } },
                        { assetType: { contains: search, mode: 'insensitive' } },
                        { primaryId: { contains: search, mode: 'insensitive' } },
                        { secondaryId: { contains: search, mode: 'insensitive' } },
                        { wingInShort: { contains: search, mode: 'insensitive' } },
                        { room: { contains: search, mode: 'insensitive' } },
                        { roomName: { contains: search, mode: 'insensitive' } },
                        { floorInWords: { contains: search, mode: 'insensitive' } },
                    ]
                }
            });
            res.json(assets);
            return;
        }
        const assets = yield prisma.assetRegister.findMany();
        res.json(assets);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving the assets!" });
    }
});
exports.getAssets = getAssets;
const addAsset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, assetBarcode, status, assetType, primaryId, secondaryId, wingInShort, room, floorInWords, roomName, notes, filterNeeded, filterOn, filterInstalledOn, filterExpiryDate, augmenterCare } = req.body;
        const asset = yield prisma.assetRegister.create({
            data: {
                id,
                assetBarcode,
                status,
                assetType,
                primaryId,
                secondaryId,
                wingInShort,
                room,
                floorInWords,
                roomName,
                notes,
                filterNeeded,
                filterOn,
                filterInstalledOn,
                filterExpiryDate,
                augmenterCare
            }
        });
        res.status(201).json(asset);
    }
    catch (error) {
        res.status(500).json({ message: "Error adding the asset!" });
    }
});
exports.addAsset = addAsset;
const updateAsset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        console.log("Updated data:", updatedData);
        if (!updatedData || Object.keys(updatedData).length === 0) {
            res.status(400).json({ message: "No data provided to update!" });
        }
        const asset = yield prisma.assetRegister.findUnique({
            where: { id },
        });
        if (!asset) {
            res.status(404).json({ message: "Asset not found!" });
        }
        const updatedAsset = yield prisma.assetRegister.update({
            where: { id },
            data: updatedData,
        });
        res.json(updatedAsset);
    }
    catch (error) {
        console.error("Error updating the asset:", error);
        res.status(500).json({ message: "Error updating the asset!" });
    }
});
exports.updateAsset = updateAsset;
const getAssetById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const asset = yield prisma.assetRegister.findUnique({
            where: { id }
        });
        if (!asset) {
            res.status(404).json({ message: "Asset not found!" });
            return;
        }
        res.json(asset);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving the asset!" });
    }
});
exports.getAssetById = getAssetById;
