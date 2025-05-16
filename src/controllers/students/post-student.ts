import { Student } from "../../modules/student"
import { Request, Response } from "express"

export const postStudent = async (req:Request, res:Response) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}