/*
  Warnings:

  - You are about to drop the column `Result(Post)` on the `LAPADB` table. All the data in the column will be lost.
  - You are about to drop the column `Result(Pre)` on the `LAPADB` table. All the data in the column will be lost.
  - You are about to drop the column `Temperature(Cold)` on the `LAPADB` table. All the data in the column will be lost.
  - You are about to drop the column `Temperature(Hot)` on the `LAPADB` table. All the data in the column will be lost.
  - You are about to drop the column `Result(Post)` on the `RiskAssessment` table. All the data in the column will be lost.
  - You are about to drop the column `Result(Pre)` on the `RiskAssessment` table. All the data in the column will be lost.
  - You are about to drop the column `Temperature(Cold)` on the `RiskAssessment` table. All the data in the column will be lost.
  - You are about to drop the column `Temperature(Hot)` on the `RiskAssessment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LAPADB" DROP COLUMN "Result(Post)",
DROP COLUMN "Result(Pre)",
DROP COLUMN "Temperature(Cold)",
DROP COLUMN "Temperature(Hot)",
ADD COLUMN     "Result (Post)" TEXT,
ADD COLUMN     "Result (Pre)" TEXT,
ADD COLUMN     "Temperature (Cold)" TEXT,
ADD COLUMN     "Temperature (Hot)" TEXT;

-- AlterTable
ALTER TABLE "RiskAssessment" DROP COLUMN "Result(Post)",
DROP COLUMN "Result(Pre)",
DROP COLUMN "Temperature(Cold)",
DROP COLUMN "Temperature(Hot)",
ADD COLUMN     "Patient Susceptibility" TEXT,
ADD COLUMN     "Patient Susceptibility Score" TEXT,
ADD COLUMN     "Result (Post)" TEXT,
ADD COLUMN     "Result (Pre)" TEXT,
ADD COLUMN     "System Operational Conditions" TEXT,
ADD COLUMN     "System Operational Conditions Score" TEXT,
ADD COLUMN     "Temperature (Cold)" TEXT,
ADD COLUMN     "Temperature (Hot)" TEXT;
