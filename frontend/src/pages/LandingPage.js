const LandingPage = () => {
    const $ContainerLandingPage = document.createElement("main");

    $ContainerLandingPage.classList.add("flex","h-screen","justify-center","items-center", "bg-slate-100");

    $ContainerLandingPage.innerHTML = `
    <h1 class="text-2xl">Landing Page</h1>
`;

return $ContainerLandingPage;
};

export {LandingPage}