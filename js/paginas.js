// ======================================================
// PÁGINAS
// Instituto Arroche, Rafael
// Inicialização padrão das páginas internas
// ======================================================

function iniciarPagina() {

    executar("Layout", () => {

        renderizarLayout();

    });

    executar("Tema", () => {

        iniciarTema();

    });

    executar("Navbar", () => {

        iniciarNavbar();

    });

    executar("Menu", () => {

        iniciarMenu();

    });

    executar("Header", () => {

        iniciarHeader();

    });

    executar("Animações", () => {

        if (typeof iniciarAnimacoes === "function") {

            iniciarAnimacoes();

        }

    });

}