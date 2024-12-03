import gameModel from "../Models/gameModel"

export const allGamesService = async () => {
    try {
         const games = await gameModel.find({})
         return games
    } catch (error) {
        console.log(`can't register`)
    }
}