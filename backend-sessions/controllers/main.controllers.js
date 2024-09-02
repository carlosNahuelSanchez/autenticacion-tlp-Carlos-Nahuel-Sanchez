import { ConnectionDataBase } from "../src/database.js";
import bcrypt from 'bcrypt';

const registrarUsuarios = async (req,res) => {
    const {username, password} = req.body
    try {
        const hashPassword = await bcrypt.hash(password,10)
        const connection = await ConnectionDataBase()
        await connection.query("INSERT INTO `users`(`username`, `password`) VALUES (?,?)",[username,hashPassword])
        connection.end()
    } catch (error) {
        console.error("NO SE PUDO REGISTRAR",error)
    }
} 

export {registrarUsuarios}