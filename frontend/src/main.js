import './style.css'
import { Header } from './components/header'
import { ProductosPage } from './pages/ProductsPage'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { register } from './register'

const pathname = window.location.pathname

const $app = document.getElementById("app")

app.appendChild(Header())

if (pathname === "/") $app.appendChild(LandingPage())
if (pathname === "/products") $app.appendChild(ProductosPage())
if (pathname === "/login") $app.appendChild(LoginPage())
if (pathname === "/register"){
    $app.appendChild(RegisterPage())
    const formRegister = await document.getElementById("formRegister")
    formRegister.addEventListener("submit", register)
}




