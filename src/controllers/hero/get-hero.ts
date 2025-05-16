import { Hero } from "../../modules/hero";
import { Request, Response } from "express";

export const getHero = async (req:Request, res:Response) => {
    try {
        const hero = await Hero.find()
        if(!hero){
            return res.status(404).json({ message:"No Hero found"})
        }
        res.status(200).json(hero)
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}