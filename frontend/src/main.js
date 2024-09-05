import './style.css'
import { Header } from './components/header'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { logout } from './services/logout'
import { register } from './services/register'
import { login } from './services/login'
import { verificarJWT } from './services/auth.jwt'

const pathname = window.location.pathname

const $app = document.getElementById("app")

const tokenExiste = verificarJWT()

const cargarPagina = async () => {

    const header = await Header();
    $app.appendChild(header);

    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    }

    if (pathname === "/") {
        if (!tokenExiste) {
            return window.location.href = "/login"
        }
        $app.appendChild(LandingPage())
    }

    if (pathname === "/login") {
        if (tokenExiste) {
            return window.location.href = "/"
        }
            $app.appendChild(LoginPage())
            const formLogin = document.getElementById("formLogin")
            if (formLogin) {
                formLogin.addEventListener("submit", login)
            }
        }

    if (pathname === "/register") {
        if (tokenExiste) {
            return window.location.href = "/"
        }
            $app.appendChild(RegisterPage())
            const formRegister = document.getElementById("formRegister")
            if (formRegister) {
                formRegister.addEventListener("submit", register)
            }
        }
    }

cargarPagina()