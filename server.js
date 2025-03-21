import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());


app.use(express.static("public"));

// API routes
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
