const LoginPage = () => {
    const $ContainerFormLogin = document.createElement("div");

    $ContainerFormLogin.classList.add("flex","h-full","justify-center","items-center", "bg-slate-100","min-h-screen");

    const $FormLogin = document.createElement("form");

    $FormLogin.classList.add("p-4","bg-slate-200","shadow-md","h-64","w-80");

    $ContainerFormLogin.appendChild($FormLogin)

    $FormLogin.innerHTML = `
        <h1 class="text-2xl">Inicio Sesión</h1>
        <div class="mb-4">
            <label for="email" class="block text-sm">Email</label>
            <input type="email" id="email" name="email" class="w-full px-2 py-1 border border-gray-300 rounded-md">
        </div>
    <div class="mb-4">
        <label for="password" class="block text-sm">Contraseña</label>
        <input type="password" id="password" name="password" class="w-full px-2 py-1 border border-gray-300 rounded-md">
    </div>
    <button type="submit" class="w-full py-1 bg-blue-500 text-white rounded-md">Inicio Sesión</button>
`;

return $ContainerFormLogin;
};

export {LoginPage}