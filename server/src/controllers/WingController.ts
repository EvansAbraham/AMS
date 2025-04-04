import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getWings = async (req: Request, res: Response): Promise<void> => {
    try {
        const wings = await prisma.wing.findMany();
        res.json(wings);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving the wings!" });
    }
};
