import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import assetRoutes from "./routes/assetRoutes";
import wingRoutes from "./routes/wingRoutes";
import floorRoutes from "./routes/floorRoutes";
import lapaRoutes from "./routes/lapaRoutes";

// ROUTE IMPORT

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// ROUTES
app.use("/assets", assetRoutes); //ASSET ROUTES
app.use("/wings", wingRoutes);   // WINGS ROUTES
app.use("/floors", floorRoutes); // FLOORS ROUTES
app.use("/lapa", lapaRoutes); //LAPA ROUTES

// SERVER
const port = Number(process.env.PORT) || 3000;

app.listen(port, "0.0.0.0", ()=>{
    console.log(`Server is running on port ${port}`);
});