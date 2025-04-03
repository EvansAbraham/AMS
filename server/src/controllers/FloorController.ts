import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getFloors = async (req: Request, res: Response): Promise<void> => {
    try {
        const { wingInShort } = req.params;

        const floors = await prisma.floors.findMany({
            where: {
                wingInShort: wingInShort,
            },
            include: {
                wing: true,
            },
        });

        if (floors.length === 0) {
            res.status(404).json({ message: "No floors found for this wing!" });
            return;
        }

        res.json(floors);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving the floors!" });
    }
};
