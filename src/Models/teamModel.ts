import { model, Schema } from "mongoose"
import ITeam from "../types/interfaces/Iteam"

const teamSchema = new Schema<ITeam>({
    name:{
        type:String,
        required:true
    },
    icon:{
        type:String
    }
 })
 
export default model<ITeam>('team',teamSchema)