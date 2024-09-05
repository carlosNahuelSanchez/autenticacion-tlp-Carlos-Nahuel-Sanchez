const logout = async (e) => {
    e.preventDefault()
    try {
        localStorage.removeItem("token");
        window.location.href = "/login"
    } catch (error) {
        console.error("Error al cerrar sesión",error)
    }
}
export {logout}
