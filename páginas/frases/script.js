// ======================================================
// FRASES
// Instituto Arroche, Rafael
// ======================================================

// ======================================================
// RENDERIZAÇÃO
// ======================================================

function renderizarFrases() {

    const container =
        document.getElementById("lista-frases");

    if (!container) return;

    container.innerHTML = "";

    frases.forEach(frase => {

        container.appendChild(
            criarCardFrase(frase)
        );

    });

}

// ======================================================
// INICIALIZAÇÃO
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    iniciarPagina();

    renderizarFrases();

});