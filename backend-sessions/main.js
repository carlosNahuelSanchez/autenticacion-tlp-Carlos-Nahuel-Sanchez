import express from "express";
import cors from "cors"
import { ConnectionDataBase } from "./database.js";

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", async (req,res)=>{
    const connection = await ConnectionDataBase()
    
    const result = await connection.query("SELECT * FROM usuarios")

    res.json(result[0])

    connection.end()
})


app.listen(4000,()=>console.log("Server Running in port", 4000))