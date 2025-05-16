import mongoose, { Document, model, Schema } from "mongoose";

export interface IStudent extends Document{
        name: string;
        image: string;
        link?: string;
        dob: Date;
        createdAt: Date;
        updatedAt: Date;
}

const studentSchema = new Schema<IStudent>({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true
    },
    image:{
        type:String,
        required:[true,"Image is required"]
    },
    link:{
        type:String,
        default:""
    },
    dob:{
        type:Date,
        required:[true,"Date of birth is required"]
    },
},{
    timestamps:true
}
)

export const Student =  model<IStudent>("Student",studentSchema)