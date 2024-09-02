const RegisterPage = () => {
    const $ContainerFormRegister = document.createElement("div");

    $ContainerFormRegister.classList.add("flex","justify-center","items-center", "bg-slate-100","min-h-screen");

    const $FormRegister = document.createElement("div");

    $FormRegister.classList.add("p-4","bg-slate-200","shadow-md","h-80","w-80")

    $ContainerFormRegister.appendChild($FormRegister)

    $FormRegister.innerHTML = `
        <h1 class="text-2xl">Registro</h1>
        <div class="mb-4">
            <label for="name" class="block text-sm">Nombre</label>
            <input type="text" id="name" name="name" class="w-full px-2 py-1 border border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
            <label for="email" class="block text-sm">Email</label>
            <input type="email" id="email" name="email" class="w-full px-2 py-1 border border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
        <label for="password" class="block text-sm">Contraseña</label>
        <input type="password" id="password" name="password" class="w-full px-2 py-1 border border-gray-300 rounded-md">
    </div>
    <button type="submit" class="w-full py-1 bg-blue-500 text-white rounded-md">Registrarse</button>
`;

return $ContainerFormRegister;
};

export {RegisterPage}