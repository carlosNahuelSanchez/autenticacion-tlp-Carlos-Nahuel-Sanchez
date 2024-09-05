const logout = async (e) => {
    e.preventDefault()
    try {
        const peticionLogout = await fetch("http://localhost:4000/logout",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            credentials:"include"
        })
        if (!peticionLogout.ok){
            return alert("Error al cerrar sesión")
        }

        window.location.href = "/login"

    } catch (error) {
        console.error("ERROR AL CERRAR SESIÓN",error)
    }
}
export {logout}
