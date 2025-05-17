import { PastEvent } from "../../../modules/event";
import { Request, Response } from "express";

export const postPastEvents = async(req:Request,res:Response)=>{
    try {
        const {title,description,coverImage,images, date, venue, featured} = req.body
        if(!title || !description || coverImage || !date || !venue){
            return res.status(400).json({message:"Please provide all the required fields"})
        }
        const pastEvent = await PastEvent.create({title,description,images,date,venue,featured})
        res.status(201).json(pastEvent)
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}