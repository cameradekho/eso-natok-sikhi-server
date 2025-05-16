import { About } from "../../modules/about";
import { Request, Response } from "express"

export  const postAbout = async(req:Request,res:Response) => {
    try {
        const about = await About.create(req.body)
        res.status(201).json(about);
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}