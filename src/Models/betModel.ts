import mongoose, { model, Schema } from "mongoose"
import IBet from "../types/interfaces/IBet"
import gameModel from "./gameModel"

const betSchema = new Schema<IBet>({
    option:{
        type:Number,
        required:true
    },
    value:{
        type:Number,
        required:true
    },
    game:{
        type:mongoose.Schema.ObjectId,
        ref:'game'
    } 
 })
 
export default model<IBet>('bet',betSchema)