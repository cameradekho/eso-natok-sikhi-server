import { Document, model, Schema } from "mongoose";

export interface ITeacher extends Document{
        name: string;
        image: string;
        link: string;
        creaTedAt: Date;
        updatedAt: Date;
}

const teacherSchema = new Schema<ITeacher>({
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
        required:[true,"Social Media Link is required"]
    }
},{
    timestamps:true
}
)

export const Teacher =  model<ITeacher>("Teacher",teacherSchema)