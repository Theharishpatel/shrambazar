import express from "express";
import type {Express} from "express" ;
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";

import dotenv from "dotenv"

dotenv.config();
connectDB();

const app: Express = express()
app.use(cors());
app.use(express.json());

//routes


app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});