// ======================================================
// CURIOSIDADES
// Instituto Arroche, Rafael
// ======================================================

// ======================================================
// RENDERIZAÇÃO
// ======================================================

function renderizarCuriosidades() {

    const container =
        document.getElementById("lista-curiosidades");

    if (!container) return;

    container.innerHTML = "";

    curiosidades.forEach(curiosidade => {

        container.appendChild(
        criarCardCuriosidade(curiosidade)
        );

    });

}

// ======================================================
// INICIALIZAÇÃO
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    iniciarPagina();

    renderizarCuriosidades();

});