import { model, Schema } from "mongoose"
import IBet from "../types/interfaces/IBet"

const betSchema = new Schema<IBet>({
    option:{
        type:Number,
        required:true
    },
    value:{
        type:Number,
        required:true
    } 
 })
 
export default model<IBet>('bet',betSchema)