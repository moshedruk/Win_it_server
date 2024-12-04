import { Request, Response } from "express"
import { addGameService, allGamesService } from "../Services/gamesService"

export const allGames = async(req:Request,res:Response) =>{
    try {
        const result = await allGamesService()
        res.status(200).json(
            result
        )
    } catch (error) {
        res.json({msg:"faild send games"})
    }
}

export const addGame = async (req:Request,res:Response) =>{
    try {
        const newGame = await addGameService(req.body)
        res.status(201).json(newGame)
    } catch (error) {
        res.status(500).json(error)
    }
}