import { About } from "../../modules/about";
import { Request, Response } from "express";

export const getAbout = async(req:Request, res:Response)=>{
    try {
        const about = await About.find();
        if(!about){
            return res.status(404).json({message:"No About is found"})
        }
        res.status(200).json(about)
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}