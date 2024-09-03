
const register = async (e) => {

    e.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const peticionRegistro = fetch("http://localhost:4000/register",{
        method: "POST",
        body: JSON.stringify({username,password}),
        headers:{
            "Content-type":"application/json"
        }
    })
    window.location.href = "/login"
}

export {register}