const sesionIniciada = async () => {
    try {
        const response = await fetch("http://localhost:4000/api/auth-session",{
            method: "GET",
            credentials: "include",
        });

        if(response.ok){
            const data = await response.json()
            console.log(data.sesionIniciada)
            return data.sesionIniciada
        }
    } catch (error) {
        alert("Error al autenticar la sesión")
        return false
    }

}

export {sesionIniciada}
