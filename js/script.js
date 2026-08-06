// ======================================================
// HOME
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    iniciarSistema();

    executar("Loading", iniciarLoading);

    executar("Animações", iniciarAnimacoes);

    executar("Timer", iniciarTimer);

    executar("Cards da Home", () => {

    renderizarCardCuriosidades();

    renderizarCardFrases();

});

});