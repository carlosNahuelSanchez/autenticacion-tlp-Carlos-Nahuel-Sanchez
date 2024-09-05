import {jwtDecode} from 'jwt-decode';

const verificarJWT = () => {
    const token = localStorage.getItem("token")
    if (token) {
        return true
    }
    return false
}
const obtenerUsername = () => {
    const token = localStorage.getItem("token")
    try {
        const decodedUsername = jwtDecode(token)
        return decodedUsername.username
    } catch (error) {
        console.error("ERROR AL OBTENER NOMBRE DEL USUARIO",error)
    }
}

export {verificarJWT, obtenerUsername}