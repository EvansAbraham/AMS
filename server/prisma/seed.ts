import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();


async function deleteAllData(orderedFileNames: string[]) {
  const modelNames = orderedFileNames.map((fileName) => {
    const modelName = path.basename(fileName, path.extname(fileName));
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  });

  const deleteOrder = [
    "LAPADB",
    "RiskAssessment",
    "Floors",
    "AssetRegister",
    "Wing",
  ];

  for (const modelName of deleteOrder) {
    const model: any = prisma[modelName as keyof typeof prisma];
    if (model) {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } else {
      console.error(
        `Model ${modelName} not found. Please ensure the model name is correctly specified.`
      );
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");

  const orderedFileNames = [
    "Wing.json",
    "Floors.json",
    "AssetRegister.json",
    "RiskAssessment.json",
    "LAPADB.json"
  ];

  await deleteAllData(orderedFileNames);

  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName as keyof typeof prisma];

    if (!model) {
      console.error(`No Prisma model matches the file name: ${fileName}`);
      continue;
    }

    for (const data of jsonData) {
      if (modelName === "AssetRegister") {
        await model.create({
          data: {
            assetBarcode: data["Asset Barcode"],
            status: data["Status"],
            assetType: data["Asset Type"],
            primaryId: data["Primary Identifier"],
            secondaryId: data["Secondary Identifier"],
            wingInShort: data["Wing in Short"],
            room: data["Room"],
            roomName: data["Room Name"],
            notes: data["Notes"],
            filterNeeded: data["Filter Needed"],
            filterOn: data["Filters On"],
            filterInstalledOn: data["Filter Installed on"],
            filterExpiryDate: data["Filter Expiry Date"],
            augmenterCare: data["Augmented Care"],
          }
        });
      } else if (modelName === "RiskAssessment") {
        await model.create({
          data: {
            assetBarcode: data["Asset Barcode"],
            status: data["Status"],
            wing: data["Wing"],
            location: data["Location"],
            riskAssessmentWoNo: data["Risk Assessment WO No"],
            riskAssessmentWoDate: data["Risk Assessment WO Date"],
            room: data["Room"],
            labName: data["Lab Name"],
            sample: data["Sample(Original or Resample)"],
            certificateNo: data["Certificate No"],
            lApA: data["LA_PA"],
            bacteriaVariant: data["Bacteria Variant"],
            resultPre: data["Result(Pre)"],
            resultPost: data["Result(Post)"],
            reportTemplate: data["Report Temp"],
            sampleOn: data["Sample On"],
            nextSampleDate: data["Next Sample Date"],
            notifiedOn: data["Notified On"],
            temperatureHot: data["Temperature(Hot)"],
            temperatureCold: data["Temperature(Cold)"],
            remedialWoNo: data["Remedial WO No"],
            remedialCompletedOn: data["Remedial Completed On"],
            comments: data["Comments"],
            processNo: data["Process No"],
            systemContamination: data["System Contamination"],
            systemContaminationScore: data["System Contamination Score"],
            managedMitigation: data["Managed Mitigation"],
            managedMitigationScore: data["Managed Mitigation Score"],
            overallRiskScore: data["Overall Risk Score"],
            assessedRisk: data["Assessed Risk"],
            additionalComments: data["Additional Comments"],
            agreedActions: data["Agreed Actions"],
            raCompletedBy: data["RA Completed By"],
            remedialActions: data["Remedial Actions"],
            remedialCompletedBy: data["Remedial Completed By"],
            raCompletedOn: data["RA Completed On"],
            remedialDoneOn: data["Remedial Done On"],
          }
        });
      } else if (modelName === "LAPADB") {
        await model.create({
          data: {
            assetBarcode: data["Asset Barcode"],
            status: data["Status"],
            wing: data["Wing"],
            location: data["Location"],
            riskAssessmentWoNo: data["Risk Assessment WO No"],
            riskAssessmentWoDate: data["Risk Assessment WO Date"],
            room: data["Room"],
            labName: data["Lab Name"],
            sample: data["Sample(Original or Resample)"],
            certificateNo: data["Certificate No"],
            lApA: data["LA_PA"],
            bacteriaVariant: data["Bacteria Variant"],
            resultPre: data["Result(Pre)"],
            resultPost: data["Result(Post)"],
            reportTemplate: data["Report Temp"],
            sampleOn: data["Sample On"],
            nextSampleDate: data["Next Sample Date"],
            notifiedOn: data["Notified On"],
            temperatureHot: data["Temperature(Hot)"],
            temperatureCold: data["Temperature(Cold)"],
            remedialWoNo: data["Remedial WO No"],
            remedialCompletedOn: data["Remedial Completed On"],
            comments: data["Comments"],
            processNo: data["Process No"],
            systemContamination: data["System Contamination"],
            systemContaminationScore: data["System Contamination Score"],
            managedMitigation: data["Managed Mitigation"],
            managedMitigationScore: data["Managed Mitigation Score"],
            overallRiskScore: data["Overall Risk Score"],
            assessedRisk: data["Assessed Risk"],
            additionalComments: data["Additional Comments"],
            agreedActions: data["Agreed Actions"],
            raCompletedBy: data["RA Completed By"],
            remedialActions: data["Remedial Actions"],
            remedialCompletedBy: data["Remedial Completed By"],
            raCompletedOn: data["RA Completed On"],
            remedialDoneOn: data["Remedial Done On"],
          }
        });
      } else {
        await model.create({
          data,
        });
      }
    }

    console.log(`Seeded ${modelName} with data from ${fileName}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
