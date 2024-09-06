import { Router } from "express";
import { registrarUsuarios, loginUsuarios} from "../controllers/main.controllers.js";
const router = Router()

router.post("/register",registrarUsuarios)
router.post("/login",loginUsuarios) 

export {router}