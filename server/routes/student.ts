import express from "express";
import { Student } from "../db";

const router = express.Router();

router.post("/newStudent", async (req, res) => {
   try {
      const newStudent = new Student(req.body);

      const savedStudent = await newStudent.save();

      res.status(201).json({ student: savedStudent });
   } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
   }
});

export default router;
