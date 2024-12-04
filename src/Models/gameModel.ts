import mongoose, { model, Schema } from "mongoose";
 
import teamModel from "./teamModel";
import betModel from "./betModel";
import IGame from "../types/interfaces/IGame";
import userModel from "./userModel";
 

 const gameSchema = new Schema<IGame>({
    teamA:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'team'
    },
    teamB:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'team'
    },
    dateOfGame:{
        type:Date,
        required:true
    },
    ended:{
        type:Boolean,
        default:false
    },
    scoreA:{
        type:Number,
        default:0
    },
    scoreB:{
        type:Number,
        default:0
    },
    bets:[{
        type:mongoose.Schema.ObjectId,
        ref:'bet'
    }],
    gamblers:[{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    }]
 })
 
export default model<IGame>('game',gameSchema)
 
