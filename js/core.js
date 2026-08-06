// ======================================================
// CORE DO SISTEMA
// Instituto Arroche, Rafael
// Inicialização global
// ======================================================

// Mantém a página sempre abrindo no topo
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

// ======================================================
// INICIALIZA COMPONENTES GLOBAIS
// ======================================================

function iniciarSistema() {

    executar("Layout", renderizarLayout);

    executar("Tema", iniciarTema);

    executar("Navbar", iniciarNavbar);

    executar("Menu", iniciarMenu);

    executar("Header", iniciarHeader);

}

// ======================================================
// GERENCIADOR
// ======================================================

function executar(nome, funcao) {

    try {

        if (typeof funcao === "function") {
            funcao();
        }

    } catch (erro) {

        console.error(`Erro ao iniciar ${nome}:`, erro);

    }

}