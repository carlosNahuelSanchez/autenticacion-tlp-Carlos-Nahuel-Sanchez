import './style.css'
import { Header } from './components/header'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { logout } from './logout'
import { register } from './register'
import { login } from './login'

const pathname = window.location.pathname

const $app = document.getElementById("app")

const cargarPagina = async () => {

    const header = await Header();
    $app.appendChild(header);

    const logoutButton =  document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    }
    
    if (pathname === "/") await $app.appendChild(LandingPage())
    if (pathname === "/login") {
        $app.appendChild(LoginPage())
        const formLogin = document.getElementById("formLogin")
        if (formLogin) {
            formLogin.addEventListener("submit", login)
        }
    }
    if (pathname === "/register") {
        $app.appendChild(RegisterPage())
        const formRegister = document.getElementById("formRegister")
        if (formRegister) {
            formRegister.addEventListener("submit", register)
        }
    }
}

cargarPagina()