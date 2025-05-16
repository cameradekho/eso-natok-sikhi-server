import { About } from "../../modules/about";
import { Request, Response } from "express"

export const updateAbout = async (req:Request,res:Response) => {
    try {
        const {_id,copy,images} = req.body;
        const about = await About.findByIdAndUpdate(_id,{copy,images});
        if(!about){
            return res.status(202).json({message:"About not found"});
        }
        res.status(200).json({
            message: `About with copy: ${about.copy} updated successfully`
        })
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}