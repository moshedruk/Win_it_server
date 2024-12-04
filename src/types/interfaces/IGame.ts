import IBet from "./IBet"
import ITeam from "./ITeam"
 
  

export default interface IGame{
    _id?:string
    teamA:ITeam
    teamB:ITeam
    dateOfGame:Date
    ended:boolean
    scoreA:number
    scoreB:number
    bets:IBet[]
    gamblers?:string[]
}