import express from "express"
import http from 'http'
import { Server } from "socket.io";
import cors from 'cors'

const app = express()

const httpServer = http.createServer(app)
export const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: "*",
    },
});


app.use(express.json())
app.use(cors())

httpServer.listen(process.env.PORT, () => {
    console.log('server is running')
})