-- CreateTable
CREATE TABLE "Wing" (
    "Wing in Short" TEXT NOT NULL,

    CONSTRAINT "Wing_pkey" PRIMARY KEY ("Wing in Short")
);

-- CreateTable
CREATE TABLE "Floors" (
    "id" TEXT NOT NULL,
    "Floor in Words" TEXT NOT NULL,
    "Wing in Short" TEXT NOT NULL,

    CONSTRAINT "Floors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetRegister" (
    "id" TEXT NOT NULL,
    "Asset Barcode" TEXT,
    "Status" TEXT,
    "Asset Type" TEXT,
    "Primary Identifier" TEXT,
    "Secondary Identifier" TEXT,
    "Wing in Short" TEXT,
    "Room" TEXT,
    "Floor in Words" TEXT,
    "Room Name" TEXT,
    "Notes" TEXT,
    "Filter Needed" TEXT,
    "Filter On" TEXT,
    "Filter Installed on" TEXT,
    "Filter Expiry Date" TEXT,
    "augmented Care" TEXT,

    CONSTRAINT "AssetRegister_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LAPADB" (
    "Asset Barcode" TEXT NOT NULL,
    "Status" TEXT,
    "Wing" TEXT,
    "Location" TEXT,
    "Risk Assessment WO No" TEXT,
    "Risk Assessment WO Date" TEXT,
    "Room" TEXT,
    "Lab Name" TEXT,
    "Sample(Original or Resample)" TEXT,
    "Certificate No" TEXT,
    "LA_PA" TEXT,
    "Bacteria Variant" TEXT,
    "Result(Pre)" TEXT,
    "Result(Post)" TEXT,
    "Report Temp" TEXT,
    "Sample On" TEXT,
    "Next Sample Date" TEXT,
    "Notified On" TEXT,
    "Temperature(Hot)" TEXT,
    "Temperature(Cold)" TEXT,
    "Remedial WO No" TEXT,
    "Remedial Completed On" TEXT,
    "Comments" TEXT,
    "Process No" TEXT,
    "System Contamination" TEXT,
    "System Contamination Score" TEXT,
    "Managed Mitigation" TEXT,
    "Managed Mitigation Score" TEXT,
    "Overall Risk Score" TEXT,
    "Assessed Risk" TEXT,
    "Additional Comments" TEXT,
    "Agreed Actions" TEXT,
    "RA Completed By" TEXT,
    "Remedial Actions" TEXT,
    "Remedial Completed By" TEXT,
    "RA Completed On" TEXT,
    "Remedial Done On" TEXT,

    CONSTRAINT "LAPADB_pkey" PRIMARY KEY ("Asset Barcode")
);

-- CreateTable
CREATE TABLE "RiskAssessment" (
    "Asset Barcode" TEXT NOT NULL,
    "Status" TEXT,
    "Wing" TEXT,
    "Location" TEXT,
    "Risk Assessment WO No" TEXT,
    "Risk Assessment WO Date" TEXT,
    "Room" TEXT,
    "Lab Name" TEXT,
    "Sample(Original or Resample)" TEXT,
    "Certificate No" TEXT,
    "LA_PA" TEXT,
    "Bacteria Variant" TEXT,
    "Result(Pre)" TEXT,
    "Result(Post)" TEXT,
    "Report Temp" TEXT,
    "Sample On" TEXT,
    "Next Sample Date" TEXT,
    "Notified On" TEXT,
    "Temperature(Hot)" TEXT,
    "Temperature(Cold)" TEXT,
    "Remedial WO No" TEXT,
    "Remedial Completed On" TEXT,
    "Comments" TEXT,
    "Process No" TEXT,
    "System Contamination" TEXT,
    "System Contamination Score" TEXT,
    "Managed Mitigation" TEXT,
    "Managed Mitigation Score" TEXT,
    "Overall Risk Score" TEXT,
    "Assessed Risk" TEXT,
    "Additional Comments" TEXT,
    "Agreed Actions" TEXT,
    "RA Completed By" TEXT,
    "Remedial Actions" TEXT,
    "Remedial Completed By" TEXT,
    "RA Completed On" TEXT,
    "Remedial Done On" TEXT,

    CONSTRAINT "RiskAssessment_pkey" PRIMARY KEY ("Asset Barcode")
);

-- CreateIndex
CREATE UNIQUE INDEX "AssetRegister_Asset Barcode_key" ON "AssetRegister"("Asset Barcode");

-- AddForeignKey
ALTER TABLE "Floors" ADD CONSTRAINT "Floors_Wing in Short_fkey" FOREIGN KEY ("Wing in Short") REFERENCES "Wing"("Wing in Short") ON DELETE RESTRICT ON UPDATE CASCADE;
