import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   score: {
    type: Number,
    default: 0,
    required: false
   },
});

export const Student = mongoose.model("User", studentSchema);
