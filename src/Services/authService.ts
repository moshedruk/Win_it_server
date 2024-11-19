import { hash } from "bcrypt"
import registerDTO from "../types/DTO/registerDTO"

export const registerService = async (user: registerDTO) => {
    try {
        const encryptPass = await hash(user.password, 10)
        const { username } = user
        const dbUser = new UserModel({ username, password: encPass })
        return await dbUser.save()
    } catch (error) {
        console.log(`can't register`)
    }
}
