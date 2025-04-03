import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getLapa = async (req: Request, res: Response): Promise<void> => {
    try {
        const search = req.query.search?.toString();
        if (search) {
            const lapa = await prisma.lAPADB.findMany({
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

        const lapa = await prisma.lAPADB.findMany();
        res.json(lapa);
    } catch (error) {
        console.error("Error retrieving the LAPA data:", error);
        res.status(500).json({ message: "Error retrieving the LAPA data!" });
    }
};

export const updateLapa = async (req: Request, res: Response): Promise<void> => {
    try {
        const { assetBarcode } = req.params;
        const updatedData = req.body;

        console.log("Updated data:", updatedData);

        if (!updatedData || Object.keys(updatedData).length === 0) {
            res.status(400).json({ message: "No data provided to update!" });
        }

        const lapa = await prisma.lAPADB.findUnique({
            where: { assetBarcode },
        });

        if (!lapa) {
            res.status(404).json({ message: "LAPA record not found!" });
        }
        
        const updatedLapa = await prisma.lAPADB.update({
            where: { assetBarcode },
            data: updatedData,
        });

        res.json(updatedLapa);
    } catch (error) {
        console.error("Error updating the LAPA data:", error);
        res.status(500).json({ message: "Error updating the LAPA data!" });
    }
};

