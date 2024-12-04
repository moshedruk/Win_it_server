import { model, Schema } from "mongoose"
import ITeam from "../types/interfaces/ITeam"
 

const teamSchema = new Schema<ITeam>({
    teamName:{
        type:String,
        required:true
    },
    icon:{
        type:String
    }
 })
 
export default model<ITeam>('team',teamSchema)