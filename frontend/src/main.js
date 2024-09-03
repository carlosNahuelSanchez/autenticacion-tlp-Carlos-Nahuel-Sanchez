import './style.css'
import { Header } from './components/header'
import { ProductosPage } from './pages/ProductsPage'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { register } from './register'
import { login } from './login'

const pathname = window.location.pathname

const $app = document.getElementById("app")

app.appendChild(Header())

if (pathname === "/") $app.appendChild(LandingPage())
if (pathname === "/products") $app.appendChild(ProductosPage())
if (pathname === "/login"){
    $app.appendChild(LoginPage())
    const formLogin = document.getElementById("formLogin")
    formLogin.addEventListener("submit",login)
}
if (pathname === "/register"){
    $app.appendChild(RegisterPage())
    const formRegister = document.getElementById("formRegister")
    formRegister.addEventListener("submit", register)
}




