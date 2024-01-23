import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/student"
import leaderboardRoutes from "./routes/leaderboard";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use("/student", studentRoutes);
app.use("/score", leaderboardRoutes);

mongoose.connect(
   `${MONGODB_URI}`,
   { dbName: "quizzApp" }
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

