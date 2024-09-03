const login = async (e) => {

    e.preventDefault()

    const usernameLogin = document.getElementById("usernameLogin").value
    const passwordLogin = document.getElementById("passwordLogin").value

    try {
        const peticionLogin = await fetch("http://localhost:4000/login",{
            method: "POST",
            body: JSON.stringify({usernameLogin,passwordLogin}),
            headers:{
                "Content-type":"application/json"
            }
        })
        if (!peticionLogin.ok){
            return alert("Error al iniciar sesión")
        }

        window.location.href = "/"

    } catch (error) {
        console.error("ERROR AL INICIAR SESIÓN",error)
    }
}

export {login}