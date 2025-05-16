import { Hero } from "../../modules/hero";
import { Request, Response } from "express"

export const updateHero = async(req:Request,res:Response) => {
    try {
        const {_id,heading,subHeading} = req.body;
        const hero = await Hero.findByIdAndUpdate(_id,{heading,subHeading});
        if(!hero){
            return res.status(202).json({message:"Hero not found"});
        }
        res.status(200).json({
            message: `Hero with heading: ${hero.heading} updated successfully`
        })
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}