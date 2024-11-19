import { compare, hash } from "bcrypt"
import registerDTO from "../types/DTO/registerDTO"
import userModel from "../Models/userModel"
import { sign } from "jsonwebtoken"

export const registerService = async (user: registerDTO) => {
    try {
        const encryptPass: string = await hash(user.password, 10)
        const { username } = user
        const dbNewUser = new userModel({ username, password: encryptPass })
        return await dbNewUser.save()
    } catch (error) {
        console.log(`can't register`)
    }
}


export const loginService = async (user: registerDTO) => {
    try {
        const userFromDB = await userModel.findOne({ username: user.username })
        console.log(userFromDB)
        if (!userFromDB) throw new Error(`user not found`)
        const match = await compare(user.password, userFromDB.password)
        if (!match) throw new Error('incorrect details')
        const token = await sign({
            userId: userFromDB._id,
            password: userFromDB.password
        }, process.env.SECRET_KEY!)
        return { ...userFromDB, token, password: "****" }
    } catch (error) {
        console.log(`error in login`)
        console.log(error)
    }
}