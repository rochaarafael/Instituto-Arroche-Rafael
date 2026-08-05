
// =======================================
// LAYOUT DO INSTITUTO ARROCHE, RAFAEL
// Renderização dos componentes globais
// =======================================


function renderizarLayout() {



    // Navbar

    const navbarContainer = document.getElementById("navbar");

    if (navbarContainer && typeof criarNavbar === "function") {

        navbarContainer.innerHTML = criarNavbar();

    }

    // Menu Mobile

    const menuContainer = document.getElementById("menu");

    if (menuContainer && typeof criarMenu === "function") {

        menuContainer.innerHTML = criarMenu();

    }

    // Footer

    const footerContainer = document.getElementById("footer");

    if (footerContainer && typeof criarFooter === "function") {

        footerContainer.innerHTML = criarFooter();

    }


}