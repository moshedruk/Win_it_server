import { Router } from "express";
import { allGames } from "../Controllers/gamesController";
 

const router = Router()

router.get('/',allGames)

export default router