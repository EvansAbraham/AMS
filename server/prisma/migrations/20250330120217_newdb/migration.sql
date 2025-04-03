/*
  Warnings:

  - The primary key for the `LAPADB` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `assetBarcode` on the `LAPADB` table. All the data in the column will be lost.
  - The primary key for the `RiskAssessment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `assetBarcode` on the `RiskAssessment` table. All the data in the column will be lost.
  - Added the required column `Asset Barcode` to the `LAPADB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Asset Barcode` to the `RiskAssessment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LAPADB" DROP CONSTRAINT "LAPADB_assetBarcode_fkey";

-- DropForeignKey
ALTER TABLE "RiskAssessment" DROP CONSTRAINT "RiskAssessment_assetBarcode_fkey";

-- AlterTable
ALTER TABLE "LAPADB" DROP CONSTRAINT "LAPADB_pkey",
DROP COLUMN "assetBarcode",
ADD COLUMN     "Asset Barcode" TEXT NOT NULL,
ADD CONSTRAINT "LAPADB_pkey" PRIMARY KEY ("Asset Barcode");

-- AlterTable
ALTER TABLE "RiskAssessment" DROP CONSTRAINT "RiskAssessment_pkey",
DROP COLUMN "assetBarcode",
ADD COLUMN     "Asset Barcode" TEXT NOT NULL,
ADD CONSTRAINT "RiskAssessment_pkey" PRIMARY KEY ("Asset Barcode");

-- AddForeignKey
ALTER TABLE "LAPADB" ADD CONSTRAINT "LAPADB_Asset Barcode_fkey" FOREIGN KEY ("Asset Barcode") REFERENCES "AssetRegister"("Asset Barcode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskAssessment" ADD CONSTRAINT "RiskAssessment_Asset Barcode_fkey" FOREIGN KEY ("Asset Barcode") REFERENCES "AssetRegister"("Asset Barcode") ON DELETE RESTRICT ON UPDATE CASCADE;
