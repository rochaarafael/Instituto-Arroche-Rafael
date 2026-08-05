// ======================================================
// SCRIPT PRINCIPAL
// Instituto Arroche, Rafael
// Inicializador geral do sistema
// ======================================================



// Mantém a página abrindo sempre no topo

if ("scrollRestoration" in history) {

    history.scrollRestoration = "manual";

}

window.scrollTo(0, 0);



// ======================================================
// INICIALIZAÇÃO DO SISTEMA
// ======================================================


document.addEventListener("DOMContentLoaded", () => {


    executar("Layout", () => {

        renderizarLayout();

    });



    executar("Tema", () => {

        iniciarTema();

    });



    executar("Menu", () => {

        iniciarMenu();

    });



    executar("Header", () => {

        iniciarHeader();

    });



    executar("Loading", () => {

        iniciarLoading();

    });



    executar("Animações", () => {

        iniciarAnimacoes();

    });



    executar("Timer", () => {

        iniciarTimer();

    });

    executar("Navbar", () => {

        iniciarNavbar();

    });
});
// ======================================================
// GERENCIADOR DE EXECUÇÃO
// Evita que um erro quebre todo o site
// ======================================================


function executar(nome, funcao) {


    try {


        if (typeof funcao === "function") {


            funcao();


        }


    } catch (erro) {


        console.error(

            `Erro ao iniciar ${nome}:`,

            erro

        );


    }


}