import { PastEvent } from "../../../modules/event"
import { Request, Response } from "express"

export const getPastEvents = async (req:Request, res:Response) => {
    try {
        const pastEvents = await PastEvent.find()
        if(!pastEvents){
            return res.status(404).json({ message:"No past events found"})
        }
        res.status(200).json(pastEvents)
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}