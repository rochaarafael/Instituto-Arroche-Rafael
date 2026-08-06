// ======================================================
// SISTEMA DE CONTAGEM REGRESSIVA
// Instituto Arroche, Rafael
// ======================================================

function iniciarTimer() {

    const diasElemento = document.getElementById("dias");
    const horasElemento = document.getElementById("horas");
    const minutosElemento = document.getElementById("minutos");
    const segundosElemento = document.getElementById("segundos");

    if (
        !diasElemento ||
        !horasElemento ||
        !minutosElemento ||
        !segundosElemento
    ) return;

    // Próxima atualização
    const dataFinal = new Date("2026-08-07T08:00:00");

    function atualizarTimer() {

        const agora = new Date();

        const diferenca = dataFinal - agora;

        if (diferenca <= 0) {

            diasElemento.textContent = "00";
            horasElemento.textContent = "00";
            minutosElemento.textContent = "00";
            segundosElemento.textContent = "00";

            return;
        }

        const dias = Math.floor(
            diferenca / (1000 * 60 * 60 * 24)
        );

        const horas = Math.floor(
            (diferenca % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutos = Math.floor(
            (diferenca % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const segundos = Math.floor(
            (diferenca % (1000 * 60)) /
            1000
        );

        diasElemento.textContent = formatar(dias);
        horasElemento.textContent = formatar(horas);
        minutosElemento.textContent = formatar(minutos);
        segundosElemento.textContent = formatar(segundos);

    }

    function formatar(numero) {
        return String(numero).padStart(2, "0");
    }

    atualizarTimer();

    setInterval(atualizarTimer, 1000);

}