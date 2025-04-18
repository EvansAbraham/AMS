"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const assetRoutes_1 = __importDefault(require("./routes/assetRoutes"));
const wingRoutes_1 = __importDefault(require("./routes/wingRoutes"));
const floorRoutes_1 = __importDefault(require("./routes/floorRoutes"));
const lapaRoutes_1 = __importDefault(require("./routes/lapaRoutes"));
// ROUTE IMPORT
// CONFIGURATIONS
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("common"));
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
// ROUTES
app.use("/assets", assetRoutes_1.default); //ASSET ROUTES
app.use("/wings", wingRoutes_1.default); // WINGS ROUTES
app.use("/floors", floorRoutes_1.default); // FLOORS ROUTES
app.use("/lapa", lapaRoutes_1.default); //LAPA ROUTES
// SERVER
const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});
