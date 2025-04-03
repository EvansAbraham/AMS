"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const prisma = new client_1.PrismaClient();
function deleteAllData(orderedFileNames) {
    return __awaiter(this, void 0, void 0, function* () {
        const modelNames = orderedFileNames.map((fileName) => {
            const modelName = path_1.default.basename(fileName, path_1.default.extname(fileName));
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
            const model = prisma[modelName];
            if (model) {
                yield model.deleteMany({});
                console.log(`Cleared data from ${modelName}`);
            }
            else {
                console.error(`Model ${modelName} not found. Please ensure the model name is correctly specified.`);
            }
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataDirectory = path_1.default.join(__dirname, "seedData");
        const orderedFileNames = [
            "Wing.json",
            "Floors.json",
            "AssetRegister.json",
            "RiskAssessment.json",
            "LAPADB.json"
        ];
        yield deleteAllData(orderedFileNames);
        for (const fileName of orderedFileNames) {
            const filePath = path_1.default.join(dataDirectory, fileName);
            const jsonData = JSON.parse(fs_1.default.readFileSync(filePath, "utf-8"));
            const modelName = path_1.default.basename(fileName, path_1.default.extname(fileName));
            const model = prisma[modelName];
            if (!model) {
                console.error(`No Prisma model matches the file name: ${fileName}`);
                continue;
            }
            for (const data of jsonData) {
                if (modelName === "AssetRegister") {
                    yield model.create({
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
                }
                else if (modelName === "RiskAssessment") {
                    yield model.create({
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
                }
                else if (modelName === "LAPADB") {
                    yield model.create({
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
                }
                else {
                    yield model.create({
                        data,
                    });
                }
            }
            console.log(`Seeded ${modelName} with data from ${fileName}`);
        }
    });
}
main()
    .catch((e) => {
    console.error(e);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
