// ======================================================
// SISTEMA DE LOADING
// Instituto Arroche, Rafael
// Tela de inicialização do sistema
// ======================================================


function iniciarLoading() {


    const loadingScreen = document.getElementById(
    "loading-screen"
);

if (!loadingScreen) return;


// verifica sessão antes de mostrar
if (
    sessionStorage.getItem("loadingVisualizado")
) {

    loadingScreen.remove();

    document.dispatchEvent(
        new Event("loadingFinalizado")
    );

    return;

}


// mostra loading
document.documentElement.classList.add(
    "mostrar-loading"
);


    if (!loadingScreen) return;




    const loadingText = document.getElementById(
        "loading-text"
    );


    const progressBar = document.getElementById(
        "progress-bar"
    );


    const percentage = document.getElementById(
        "percentage"
    );





    // ======================================
    // ROTEIROS ORIGINAIS
    // ======================================


    const roteiros = [


        [

            {
                texto:"Ligando computadores...",
                tempo:1200
            },

            {
                texto:"Inicializando Instituto...",
                tempo:1300
            },

            {
                texto:"Conectando ao Banco de Dados...",
                tempo:900
            },

            {
                texto:"Consultando Arquivo das Baleias macho...",
                tempo:2200
            },

            {
                texto:"Analisando informações traumáticas...",
                tempo:1800
            },

            {
                texto:"Buscando Pesquisadora Honorária...",
                tempo:2600
            },

            {
                texto:"🫐 Maria Clara localizada.",
                tempo:1500
            }

        ],



        [

            {
                texto:"Ligando computadores...",
                tempo:1200
            },

            {
                texto:"Organizando Pokédex...",
                tempo:1400
            },

            {
                texto:"Separando Butterfree dos Pokémon não-fofos...",
                tempo:2000
            },

            {
                texto:"Consultando PC do Dr. Carvalho...",
                tempo:1700
            },

            {
                texto:"Buscando especialista em curiosidades...",
                tempo:2600
            },

            {
                texto:"🫐 Pesquisadora Excepcional encontrada.",
                tempo:1500
            }

        ],



        [

            {
                texto:"Ligando computadores...",
                tempo:1200
            },

            {
                texto:"Calculando quanto sobrou pro betinha...",
                tempo:1800
            },

            {
                texto:"Nenhum resultado encontrado.",
                tempo:1200
            },

            {
                texto:"Verificando autenticidade...",
                tempo:1700
            },

            {
                texto:"Consultando Arquivos Secretos...",
                tempo:2500
            },

            {
                texto:"🫐 Acesso concedido.",
                tempo:1600
            }

        ],



        [

            {
                texto:"Ligando computadores...",
                tempo:1200
            },

            {
                texto:"Procurando animal mais tóxico do mundo...",
                tempo:2100
            },

            {
                texto:"Encontrado: 'Gato macho'",
                tempo:1500
            },

            {
                texto:"Concedendo acesso...",
                tempo:1800
            },

            {
                texto:"🫐 Pesquisadora Honorária localizada.",
                tempo:1700
            }

        ]


    ];





    const roteiro =
        roteiros[
            Math.floor(
                Math.random() * roteiros.length
            )
        ];



    let etapa = 0;

    let progressoAtual = 0;





    // ======================================
    // BARRA COM PAUSAS ALEATÓRIAS
    // ======================================


    function animarBarra(destino, callback) {


        const velocidade =
            Math.random() * 35 + 15;



        const intervalo = setInterval(() => {



            // avanço irregular

            progressoAtual +=
                Math.random() * 2;



            // pausa aleatória

            if (
                Math.random() < 0.15
            ) {

                return;

            }



            if (
                progressoAtual >= destino
            ) {


                progressoAtual = destino;


                clearInterval(intervalo);


                callback();


            }



            if (progressBar) {


                progressBar.style.width =
                    progressoAtual + "%";


            }



            if (percentage) {


                percentage.textContent =
                    Math.floor(progressoAtual)
                    + "%";


            }



        }, velocidade);


    }






    // ======================================
    // SAUDAÇÃO POR HORÁRIO
    // ======================================


    function obterSaudacao() {


        const hora =
            new Date().getHours();



        if (hora >= 5 && hora < 12) {

            return "Bom dia";


        } else if (hora >= 12 && hora < 18) {

            return "Boa tarde";


        } else if (hora >= 18 && hora < 24) {

            return "Boa noite";


        } else {

            return "Boa madrugada";

        }


    }







    // ======================================
    // EXECUÇÃO DAS ETAPAS
    // ======================================


    function executarEtapa() {


        if (etapa >= roteiro.length) {


            if (loadingText) {


                loadingText.innerHTML =
                `✔ Instituto inicializado.<br><br>
                ${obterSaudacao()}, Maria Clara 🫐`;


            }



            setTimeout(() => {


    loadingScreen.classList.add(
        "hide"
    );


    setTimeout(() => {


        sessionStorage.setItem(
    "loadingVisualizado",
    "true"
);


loadingScreen.classList.add(
    "hide"
);


setTimeout(() => {

    loadingScreen.remove();


    document.documentElement.classList.remove(
        "mostrar-loading"
    );


    document.dispatchEvent(
        new Event("loadingFinalizado")
    );


},800);

    },800);



},1000);

            return;


        }





        if (loadingText) {


            loadingText.textContent =
                roteiro[etapa].texto;


        }




        const restante =
            100 - progressoAtual;



        const destino =
            progressoAtual +
            restante /
            (roteiro.length - etapa);





        animarBarra(
            destino,
            () => {



                setTimeout(() => {



                    etapa++;


                    executarEtapa();



                },
                roteiro[etapa].tempo);



            }
        );



    }





    // inicia loading

    executarEtapa();



}