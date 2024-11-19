import { model, Schema } from "mongoose";
import IUser from "../types/interfaces/IUser";

 const userSchema = new Schema<IUser>({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    points:{
        type:Number,
        default:0
    },
    percent_souccess:{
        type:Number
    }
 })
 
export default model<IUser>('user',userSchema)
 