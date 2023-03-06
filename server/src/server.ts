import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
dotenv.config();
const app = express();
const io=new Server();

app.use(bodyParser.json());
app.use(cors());

const emailToSocketMapping=new Map();

io.on('connection',socket=>{
    console.log("connected")
    socket.on('join-room',(data)=>{
        const {roomId,emailId}=data;
        emailToSocketMapping.set(emailId,socket.id);
        socket.join(roomId)
        socket.broadcast.to(roomId).emit('user-joined',{emailId})
    })
});


app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});