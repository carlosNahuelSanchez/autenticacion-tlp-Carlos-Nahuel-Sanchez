import express from "express";
import cors from "cors"
import morgan from "morgan";
import { router } from "../routes/main.routes.js";
import { PORT } from "../config/config.js";
const app = express()

app.use(cors({
    origin: [
        'http://localhost:4000',
        'http://localhost:5173',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json())
app.use(morgan('dev'));

app.use(router)


app.listen(PORT,()=>console.log("Server Running in port", PORT))