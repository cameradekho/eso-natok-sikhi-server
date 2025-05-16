import { Document, model, Schema } from "mongoose";

export interface IAbout extends Document{
    copy:string;
    images:string[];
    createdAt: Date;
    updatedAt: Date;
}

const aboutSchema = new Schema<IAbout>({
    copy:{
        type:String,
        required:[true,"Copy is required"],
        trim:true
    },
    images:{
        type:[String],
        required:[true,"Images is required"],
        trim:true
    }
    },{
        timestamps:true
    }
)

export const About = model<IAbout>("About",aboutSchema)