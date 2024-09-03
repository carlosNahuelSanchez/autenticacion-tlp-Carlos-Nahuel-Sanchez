import { ConnectionDataBase } from "../src/database.js";
import bcrypt from 'bcrypt';

const registrarUsuarios = async (req, res) => {
    const { username, password } = req.body
    try {
        const hashPassword = await bcrypt.hash(password, 10)
        const connection = await ConnectionDataBase()
        await connection.query("INSERT INTO `users`(`username`, `password`) VALUES (?,?)", [username, hashPassword])
        connection.end()
    } catch (error) {
        console.error("NO SE PUDO REGISTRAR", error)
    }
}

const loginUsuarios = async (req, res) => {
    const { usernameLogin, passwordLogin } = req.body
    try {
        const connection = await ConnectionDataBase()
        const [buscarUsuario] = await connection.query("SELECT * FROM users WHERE username LIKE ?", [usernameLogin])
        connection.end()
        if (buscarUsuario.length === 0) {
            return res.status(400).json({ msg: "El usuario no existe" })
        }
            const validarContrasenia = await bcrypt.compare(passwordLogin, buscarUsuario[0].password)
            if (!validarContrasenia) {
                return res.status(401).json({
                    msg: 'El usuario o contraseña no coiciden'
                })
            }
            req.session.userId = buscarUsuario[0].id
            req.session.username = buscarUsuario[0].username
            return res.json({
                message: 'Inicio de sesión exitoso',
            })
    } catch (error) {
        console.error("Error al iniciar sesión", error)
    }

}

export { registrarUsuarios, loginUsuarios }