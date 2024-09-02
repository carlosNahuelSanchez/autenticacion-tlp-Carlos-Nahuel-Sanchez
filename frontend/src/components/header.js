const Header = () => {
    const $header = document.createElement("header")

    $header.classList.add("bg-blue-500","flex","justify-center","w-full","fixed")

    $header.innerHTML = `
    <div class="my-5">
        <h1 class="text-4xl text-white text-center">Header Página</h1>
        <div class="flex justify-center gap-3">
            <a class="text-white text-lg hover:underline " href="/login">Iniciar Sesión</a>
            <a class="text-white text-lg hover:underline " href="/register">Registro</a>
        </div>
    </div>
        `

    return $header
}

export {Header}