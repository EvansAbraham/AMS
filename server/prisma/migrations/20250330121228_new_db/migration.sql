/*
  Warnings:

  - You are about to drop the column `wingInShort` on the `Floors` table. All the data in the column will be lost.
  - Added the required column `Wing in Short` to the `Floors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AssetRegister" DROP CONSTRAINT "AssetRegister_Wing in Short_fkey";

-- DropForeignKey
ALTER TABLE "Floors" DROP CONSTRAINT "Floors_wingInShort_fkey";

-- AlterTable
ALTER TABLE "Floors" DROP COLUMN "wingInShort",
ADD COLUMN     "Wing in Short" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Floors" ADD CONSTRAINT "Floors_Wing in Short_fkey" FOREIGN KEY ("Wing in Short") REFERENCES "Wing"("Wing in Short") ON DELETE RESTRICT ON UPDATE CASCADE;
