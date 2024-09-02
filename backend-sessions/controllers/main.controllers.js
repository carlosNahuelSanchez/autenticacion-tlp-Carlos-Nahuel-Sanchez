import { ConnectionDataBase } from "../src/database.js";

const registrarUsuarios = async (req,res) => {
    const {username, password} = req.body
    const connection = await ConnectionDataBase()
    await connection.query("INSERT INTO `users`(`username`, `password`) VALUES (?,?)",[username,password])
    connection.end()
} 

export {registrarUsuarios}