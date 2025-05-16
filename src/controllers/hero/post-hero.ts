import { Hero } from "../../modules/hero";
import { Request, Response } from "express";

export const postHero = async (req:Request, res:Response) => {
    try {
        const hero = await Hero.create(req.body)
        res.status(201).json(hero);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}