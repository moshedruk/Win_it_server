import IBet from "./IBet"
import ITeam from "./Iteam"

export default interface IGame{
    teamA:ITeam
    teamB:ITeam
    dateOfGame:Date
    ended:boolean
    scoreA:number
    scoreB:number
    bets:IBet[]
}