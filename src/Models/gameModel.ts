import { model, Schema } from "mongoose";
import IGame from "../types/interfaces/IGame";
import teamModel from "./teamModel";
import betModel from "./betModel";
 

 const gameSchema = new Schema<IGame>({
    teamA:{
        type:teamModel,
        required:true
    },
    teamB:{
        type:teamModel,
        required:true
    },
    dateOfGame:{
        type:Date,
        required:true
    },
    ended:{
        type:Boolean
    },
    scoreA:{
        type:Number,
        default:0
    },
    scoreB:{
        type:Number,
        default:0
    },
    bets:{
        type:[betModel]
    }
 })
 
export default model<IGame>('game',gameSchema)
 

 