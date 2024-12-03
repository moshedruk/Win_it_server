import { Request, Response } from "express"
import { allGamesService } from "../Services/gamesService"

export const allGames = async(req:Request,res:Response) =>{
    try {
        const result = await allGamesService()
        res.status(200).json(
            {msg:"humus"}
            //result
        )
    } catch (error) {
        res.json({msg:"faild send games"})
    }
}