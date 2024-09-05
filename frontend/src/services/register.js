
const register = async (e) => {

    e.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    try {
        const peticionRegistro = await fetch("http://localhost:4000/register",{
            method: "POST",
            body: JSON.stringify({username,password}),
            headers:{
                "Content-type":"application/json"
            }
        })
        if (peticionRegistro.ok) {
            return window.location.href = "/login";
        }
        
        alert("El nombre de usuario ya existe");
    
    } catch (error) {
        alert("El usuario ya existe")
        console.error("NO SE PUDO REGISTRAR",error)
    }
}

export {register}