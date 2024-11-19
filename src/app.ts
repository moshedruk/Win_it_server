import express from "express"
import http from 'http'
import { Server } from "socket.io";
import cors from 'cors'
import { connectToMonge } from "./DB/config";
import authRouter from "./Routers/authRouter";
 

const app = express()

const httpServer = http.createServer(app)
export const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: "*",
    },
});

connectToMonge()
app.use(express.json())
app.use(cors())

app.use('/userauth',authRouter)

httpServer.listen(process.env.PORT, () => {
    console.log('server is running')
})