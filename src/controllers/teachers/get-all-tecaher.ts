import { Teacher } from "../../modules/teacher";
import { Request, Response } from "express";

export const getAllTeacher = async (req: Request, res: Response) => {
    try {
        const teachers = await Teacher.find();
        if (!teachers) {
            return res.status(404).json({ message: "No teachers found" });
        }
        res.status(200).json(teachers);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}