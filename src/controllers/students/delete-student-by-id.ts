import { Student } from "../../modules/student";
import { Request, Response } from "express"

export const deleteStudentById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id);
        if(!student){
            return res.status(202).json({message:"Student not found"});
        }
        res.status(200).json({
            message: `Student with name: ${student.name} deleted successfully`
        })
    } catch (error:any) {
        res.status(500).json({message: error.message})
    }
}