import { Router } from "express";
import { addGame, allGames } from "../Controllers/gamesController";
import { onlyManager } from "../MW/adminMW";
 

const router = Router()
 
router.get('/',allGames)

router.post('/addgame',onlyManager,addGame)

export default router