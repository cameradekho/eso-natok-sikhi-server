import { Student } from "../../modules/student";
import { Request, Response } from "express";

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await Student.find();
        if (!students) {
            return res.status(404).json({ message: "No students found" });
        }
        res.status(200).json(students);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};
