import express from "express";
import { getAllStudents, addStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get("/get-students", getAllStudents);
router.post("/add-student", addStudent);

export default router;
