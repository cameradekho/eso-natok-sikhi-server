import { Document, model, Schema } from "mongoose"

export interface IUpcomingEvent extends Document {
  _id: string
  title: string
  description: string
  coverImage: string
  images?: string[]
  date: Date
  venue: string
  featured?: boolean
  createdAt: number
  updatedAt: number
}

export interface IPastEvent extends Document {
  _id: string
  title: string
  images: string[]
  description: string
  createdAt: number
  updatedAt: number
}

export interface IPastEventHero extends Document {
  _id: string
  title: string
  coverImage: string
  link?: string
  createdAt: number
  updatedAt: number;
}


const pastEventSchema = new Schema<IPastEvent>({
  title: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},
{
    timestamps: true,
}
)

export const PastEvent = model<IPastEvent>("PastEvent", pastEventSchema)