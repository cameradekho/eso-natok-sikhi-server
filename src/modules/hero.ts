import { Document, model, Schema } from "mongoose";

export interface IHero extends Document{
    heading: string;
    subHeading: string;
    createdAt: Date;
    updatedAt: Date;
}

const heroSchema = new Schema<IHero>({
    heading:{
        type:String,
        required:[true,"Heading is required"],
        trim:true
    },
    subHeading:{
        type:String,
        required:[true,"Sub Heading is required"],
        trim:true
    }
    },{
        timestamps:true
    }
)

export const Hero = model<IHero>("Hero",heroSchema)