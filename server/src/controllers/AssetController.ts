import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAssets = async (req: Request, res: Response): Promise<void> => {
    try {
        const search = req.query.search?.toString();
        if (search) {
            const assets = await prisma.assetRegister.findMany({
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
        const assets = await prisma.assetRegister.findMany();
        res.json(assets);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving the assets!" });
    }
};

export const addAsset = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
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
            augmentedCare
        } = req.body;

        const asset = await prisma.assetRegister.create({
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
                augmentedCare
            }
        });

        res.status(201).json(asset);
    } catch (error) {
        res.status(500).json({ message: "Error adding the asset!" });
    }
};

export const updateAsset = async (req: Request, res: Response): Promise<void> => {

    try {
        const { id } = req.params;
        const updatedData = req.body;
        console.log("Updated data:", updatedData);
        if (!updatedData || Object.keys(updatedData).length === 0) {
            res.status(400).json({ message: "No data provided to update!" });
        }

        const asset = await prisma.assetRegister.findUnique({
            where: { id },
        });

        if (!asset) {
            res.status(404).json({ message: "Asset not found!" });
        }

        const updatedAsset = await prisma.assetRegister.update({
            where: { id },
            data: updatedData,
        });

        res.json(updatedAsset);
    } catch (error) {
        console.error("Error updating the asset:", error);
        res.status(500).json({ message: "Error updating the asset!" });
    }
};

export const getAssetById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const asset = await prisma.assetRegister.findUnique({
            where: { id }
        });

        if (!asset) {
            res.status(404).json({ message: "Asset not found!" });
            return;
        }

        res.json(asset);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving the asset!" });
    }
};
