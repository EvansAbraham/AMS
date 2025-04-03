-- CreateTable
CREATE TABLE "Wing" (
    "id" TEXT NOT NULL,
    "wing_id" TEXT NOT NULL,
    "wing_in_short" TEXT NOT NULL,

    CONSTRAINT "Wing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Floors" (
    "id" TEXT NOT NULL,
    "floor_id" TEXT NOT NULL,
    "wing_id" TEXT NOT NULL,

    CONSTRAINT "Floors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" TEXT NOT NULL,
    "asset_barcode" TEXT NOT NULL,
    "barcode_image_url" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "asset_type" TEXT NOT NULL,
    "primary_id" TEXT NOT NULL,
    "secondary_id" TEXT NOT NULL,
    "wing_in_short" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "room_name" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "filter_needed" TEXT NOT NULL,
    "filter_on" TEXT NOT NULL,
    "filter_installation_date" TIMESTAMP(3) NOT NULL,
    "filter_expiry_date" TIMESTAMP(3) NOT NULL,
    "floor_id" TEXT NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wing_wing_id_key" ON "Wing"("wing_id");

-- AddForeignKey
ALTER TABLE "Floors" ADD CONSTRAINT "Floors_wing_id_fkey" FOREIGN KEY ("wing_id") REFERENCES "Wing"("wing_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_floor_id_fkey" FOREIGN KEY ("floor_id") REFERENCES "Floors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
