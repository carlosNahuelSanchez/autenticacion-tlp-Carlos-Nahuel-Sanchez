import { Router } from "express";
import { registrarUsuarios } from "../controllers/main.controllers.js";
const router = Router()

router.post("/register",registrarUsuarios)

export {router}