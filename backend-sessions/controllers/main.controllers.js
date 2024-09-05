import { ConnectionDataBase } from "../src/database.js";
import bcrypt from 'bcrypt';

const registrarUsuarios = async (req, res) => {
    const { username, password } = req.body
    try {
        const connection = await ConnectionDataBase()
        const [userExist] = await connection.query("SELECT * FROM users WHERE username = ?", [username])
        if (userExist.length > 0) {
            console.error("El usuario ya existe")
            return res.status(409).json({message:"El nombre de usuario ya existe"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        await connection.query("INSERT INTO `users`(`username`, `password`) VALUES (?,?)", [username, hashPassword])
        res.status(201).json({ message: "Usuario registrado exitosamente" });
        connection.end()
    } catch (error) {
        console.error("NO SE PUDO REGISTRAR", error)
        res.status(500).json({ message: "Error al registrar el usuario" });
    }
}

const loginUsuarios = async (req, res) => {
    const { usernameLogin, passwordLogin } = req.body
    try {
        const connection = await ConnectionDataBase()
        const [buscarUsuario] = await connection.query("SELECT * FROM users WHERE username LIKE ?", [usernameLogin])
        connection.end()
        if (buscarUsuario.length === 0) {
            return res.status(400).json({ message: "El usuario no existe" })
        }
            const validarContrasenia = await bcrypt.compare(passwordLogin, buscarUsuario[0].password)
            if (!validarContrasenia) {
                return res.status(401).json({
                    msg: 'El usuario o contraseña no coiciden'
                })
            }
            req.session.userId = buscarUsuario[0].id
            req.session.username = buscarUsuario[0].username
            console.log(req.session)
            return res.json({
                message: 'Inicio de sesión exitoso',
            })
    } catch (error) {
        console.error("Error al iniciar sesión", error)
    }

}

const cerrarSesion = (req,res) => {
    req.session.destroy(error =>{
        if(error){
            return res.status(500).json({message:"Error al cerrar sesión"})
        }
        res.clearCookie("connect.sid");
        res.json({message:"Sesion Cerrada"})
        console.log(req.session)
    })
}

const sesion = (req,res) => {
    try {
        const sesionIniciada = req.session.userId;
        return res.json({sesionIniciada, username: req.session.username})
    } catch (error) {
        console.error("Error al verificar la sesión:", error);
        res.status(401).json({sesionIniciada:false, message:"No existe session"},error)
    }
}

export { registrarUsuarios, loginUsuarios, cerrarSesion, sesion }