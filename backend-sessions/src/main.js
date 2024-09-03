import express from "express";
import cors from "cors"
import morgan from "morgan";
import session from 'express-session';
import { router } from "../routes/main.routes.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'));
app.use(session({
    secret: 'mi_secreto',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false, 
        httpOnly: true,
    }
}));
app.use(router)





app.listen(4000,()=>console.log("Server Running in port", 4000))