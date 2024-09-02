const ProductosPage = () => {
    const $ContainerProductosPage = document.createElement("main");

    $ContainerProductosPage.classList.add("flex","h-screen","justify-center","items-center", "bg-slate-100");

    $ContainerProductosPage.innerHTML = `
    <h1 class="text-2xl">Productos</h1>
`;

return $ContainerProductosPage;
};

export {ProductosPage}