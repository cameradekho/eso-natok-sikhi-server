import { Teacher } from "../../modules/teacher";
import { Request, Response } from "express";

export const deleteTeacherById = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;
        const teacher = await Teacher.findByIdAndDelete(id);
        if(!teacher){
            return res.status(202).json({message:"Teacher not found"});
        }
        res.status(200).json({
            message: `Teacher with name: ${teacher.name} deleted successfully`
        })
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}