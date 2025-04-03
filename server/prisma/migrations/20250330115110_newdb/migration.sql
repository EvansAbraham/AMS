/*
  Warnings:

  - You are about to drop the column `floor_id` on the `Floors` table. All the data in the column will be lost.
  - You are about to drop the column `wing_id` on the `Floors` table. All the data in the column will be lost.
  - The primary key for the `Wing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Wing` table. All the data in the column will be lost.
  - You are about to drop the column `wing_id` on the `Wing` table. All the data in the column will be lost.
  - You are about to drop the column `wing_in_short` on the `Wing` table. All the data in the column will be lost.
  - You are about to drop the `Asset` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Floor in Words` to the `Floors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wingInShort` to the `Floors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Wing in Short` to the `Wing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Floors" DROP CONSTRAINT "Floors_wing_id_fkey";

-- DropIndex
DROP INDEX "Wing_wing_id_key";

-- AlterTable
ALTER TABLE "Floors" DROP COLUMN "floor_id",
DROP COLUMN "wing_id",
ADD COLUMN     "Floor in Words" TEXT NOT NULL,
ADD COLUMN     "wingInShort" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Wing" DROP CONSTRAINT "Wing_pkey",
DROP COLUMN "id",
DROP COLUMN "wing_id",
DROP COLUMN "wing_in_short",
ADD COLUMN     "Wing in Short" TEXT NOT NULL,
ADD CONSTRAINT "Wing_pkey" PRIMARY KEY ("Wing in Short");

-- DropTable
DROP TABLE "Asset";

-- CreateTable
CREATE TABLE "AssetRegister" (
    "id" TEXT NOT NULL,
    "Asset Barcode" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "Asset Type" TEXT NOT NULL,
    "Primary Identifier" TEXT NOT NULL,
    "Secondary Identifier" TEXT NOT NULL,
    "Wing in Short" TEXT NOT NULL,
    "Room" TEXT NOT NULL,
    "Room Name" TEXT NOT NULL,
    "Notes" TEXT NOT NULL,
    "Filter Needed" TEXT NOT NULL,
    "Filter On" TEXT NOT NULL,
    "Filter Installed on" TIMESTAMP(3) NOT NULL,
    "Filter Expiry Date" TIMESTAMP(3) NOT NULL,
    "Augmenter Care" TEXT NOT NULL,

    CONSTRAINT "AssetRegister_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LAPADB" (
    "assetBarcode" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "Wing" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Risk Assessment WO No" INTEGER NOT NULL,
    "Risk Assessment WO Date" TIMESTAMP(3) NOT NULL,
    "Room" TEXT NOT NULL,
    "Lab Name" TEXT NOT NULL,
    "Sample(Original or Resample)" TEXT NOT NULL,
    "Certificate No" TEXT NOT NULL,
    "LA_PA" TEXT NOT NULL,
    "Bacteria Variant" TEXT NOT NULL,
    "Result(Pre)" TEXT NOT NULL,
    "Result(Post)" TEXT NOT NULL,
    "Report Temp" TEXT NOT NULL,
    "Sample On" TIMESTAMP(3) NOT NULL,
    "Next Sample Date" TIMESTAMP(3) NOT NULL,
    "Notified On" TIMESTAMP(3) NOT NULL,
    "Temperature(Hot)" TEXT NOT NULL,
    "Temperature(Cold)" TEXT NOT NULL,
    "Remedial WO No" INTEGER NOT NULL,
    "Remedial Completed On" TIMESTAMP(3) NOT NULL,
    "Comments" TEXT NOT NULL,
    "Process No" TEXT NOT NULL,
    "System Contamination" TEXT NOT NULL,
    "System Contamination Score" INTEGER NOT NULL,
    "Managed Mitigation" TEXT NOT NULL,
    "Managed Mitigation Score" INTEGER NOT NULL,
    "Overall Risk Score" INTEGER NOT NULL,
    "Assessed Risk" TEXT NOT NULL,
    "Additional Comments" TEXT NOT NULL,
    "Agreed Actions" TEXT NOT NULL,
    "RA Completed By" TEXT NOT NULL,
    "Remedial Actions" TEXT NOT NULL,
    "Remedial Completed By" TEXT NOT NULL,
    "RA Completed On" TIMESTAMP(3) NOT NULL,
    "Remedial Done On" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LAPADB_pkey" PRIMARY KEY ("assetBarcode")
);

-- CreateTable
CREATE TABLE "RiskAssessment" (
    "assetBarcode" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "Wing" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Risk Assessment WO No" INTEGER NOT NULL,
    "Risk Assessment WO Date" TIMESTAMP(3) NOT NULL,
    "Room" TEXT NOT NULL,
    "Lab Name" TEXT NOT NULL,
    "Sample(Original or Resample)" TEXT NOT NULL,
    "Certificate No" TEXT NOT NULL,
    "LA_PA" TEXT NOT NULL,
    "Bacteria Variant" TEXT NOT NULL,
    "Result(Pre)" TEXT NOT NULL,
    "Result(Post)" TEXT NOT NULL,
    "Report Temp" TEXT NOT NULL,
    "Sample On" TIMESTAMP(3) NOT NULL,
    "Next Sample Date" TIMESTAMP(3) NOT NULL,
    "Notified On" TIMESTAMP(3) NOT NULL,
    "Temperature(Hot)" TEXT NOT NULL,
    "Temperature(Cold)" TEXT NOT NULL,
    "Remedial WO No" INTEGER NOT NULL,
    "Remedial Completed On" TIMESTAMP(3) NOT NULL,
    "Comments" TEXT NOT NULL,
    "Process No" TEXT NOT NULL,
    "System Contamination" TEXT NOT NULL,
    "System Contamination Score" INTEGER NOT NULL,
    "Managed Mitigation" TEXT NOT NULL,
    "Managed Mitigation Score" INTEGER NOT NULL,
    "Overall Risk Score" INTEGER NOT NULL,
    "Assessed Risk" TEXT NOT NULL,
    "Additional Comments" TEXT NOT NULL,
    "Agreed Actions" TEXT NOT NULL,
    "RA Completed By" TEXT NOT NULL,
    "Remedial Actions" TEXT NOT NULL,
    "Remedial Completed By" TEXT NOT NULL,
    "RA Completed On" TIMESTAMP(3) NOT NULL,
    "Remedial Done On" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RiskAssessment_pkey" PRIMARY KEY ("assetBarcode")
);

-- CreateIndex
CREATE UNIQUE INDEX "AssetRegister_Asset Barcode_key" ON "AssetRegister"("Asset Barcode");

-- AddForeignKey
ALTER TABLE "Floors" ADD CONSTRAINT "Floors_wingInShort_fkey" FOREIGN KEY ("wingInShort") REFERENCES "Wing"("Wing in Short") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetRegister" ADD CONSTRAINT "AssetRegister_Wing in Short_fkey" FOREIGN KEY ("Wing in Short") REFERENCES "Wing"("Wing in Short") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LAPADB" ADD CONSTRAINT "LAPADB_assetBarcode_fkey" FOREIGN KEY ("assetBarcode") REFERENCES "AssetRegister"("Asset Barcode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskAssessment" ADD CONSTRAINT "RiskAssessment_assetBarcode_fkey" FOREIGN KEY ("assetBarcode") REFERENCES "AssetRegister"("Asset Barcode") ON DELETE RESTRICT ON UPDATE CASCADE;
