import { Router } from "express";
import { registrarUsuarios, loginUsuarios, sesion, cerrarSesion } from "../controllers/main.controllers.js";
const router = Router()

router.post("/register",registrarUsuarios)
router.post("/login",loginUsuarios)
router.post("/logout", cerrarSesion)
router.get("/api/auth-session", sesion)

export {router}