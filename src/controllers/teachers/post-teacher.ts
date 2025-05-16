import { Teacher } from "../../modules/teacher";
import { Request, Response } from "express";

export const postTeacher = async (req:Request, res:Response) => {
    try {
        const teacher = await Teacher.create(req.body);
        res.status(201).json(teacher);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}