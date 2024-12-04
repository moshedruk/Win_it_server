import { Router } from "express";
import { addGame, allGames } from "../Controllers/gamesController";
 

const router = Router()
 
router.get('/',allGames)

router.post('/addgame',addGame)

export default router