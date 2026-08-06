// ======================================================
// SISTEMA DE CONTAGEM REGRESSIVA
// Instituto Arroche, Rafael
// Contador até próxima atualização
// ======================================================


function iniciarTimer() {


    const timer = document.getElementById("timer");


    if (!timer) return;




    // Data alvo:
    // 10/08/2026 às 08:00:00
    const dataFinal = new Date(
        "2026-08-07T08:00:00"
    );





    function atualizarTimer() {


        const agora = new Date();


        const diferenca =
            dataFinal - agora;





        // Quando chegar ao fim

        if (diferenca <= 0) {


            timer.innerHTML =
            `
            00 : 00 : 00 : 00
            `;


            return;


        }





        const dias = Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );



        const horas = Math.floor(
            (diferenca %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );



        const minutos = Math.floor(
            (diferenca %
            (1000 * 60 * 60)) /
            (1000 * 60)
        );



        const segundos = Math.floor(
            (diferenca %
            (1000 * 60)) /
            1000
        );






        timer.innerHTML =
        `
        ${formatar(dias)}
        :
        ${formatar(horas)}
        :
        ${formatar(minutos)}
        :
        ${formatar(segundos)}
        `;


    }





    function formatar(numero) {


        return String(numero)
            .padStart(2, "0");


    }





    atualizarTimer();


    setInterval(
        atualizarTimer,
        1000
    );


}