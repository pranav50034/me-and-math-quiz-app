import express from "express";
import { Student } from "../db";

const router = express.Router();

router.get("/leaderboard", async (req, res) => {
    try {
       const topScores = await Student.find().sort({ score: -1 }).limit(10);

       res.status(200).json(topScores);
    } catch (error) {
       console.error(error);
       res.status(500).json({ error: "Internal Server Error" });
    }
})

export default router;
