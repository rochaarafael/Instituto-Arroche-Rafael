// =======================================
// CONFIGURAÇÕES GERAIS
// =======================================


const CONFIG = {


    instituto: "Instituto Arroche, Rafael",

    emoji: "🐱",

    pesquisadora: "Maria Clara",

    versao: "1.0.0",


};


// =======================================
// CAMINHOS
// =======================================


const BASE_PATH = (() => {



    if (location.hostname.includes("github.io")) {


        return "/Instituto-Arroche-Rafael/";


    }



    return "/";


})();



function caminho(arquivo) {



    if (

        arquivo.startsWith("http")

    ) {

        return arquivo;

    }



    return BASE_PATH + arquivo;



}



// =======================================
// PÁGINAS
// =======================================


const PAGINAS = [


    {

        id: "curiosidades",

        nome: "Curiosidades",

        titulo: "Curiosidades sobre o Pesquisador",

        icone: "🔬",

        link: "páginas/curiosidades/curiosidades.html"

    },


    {

        id: "frases",

        nome: "Frases",

        titulo: "Frases Marcantes",

        icone: "🐋",

        link: "páginas/frases/frases.html"

    },


    {

        id: "hall",

        nome: "Obras",

        titulo: "Obras",

        icone: "🎥",

        link: "páginas/obras/obras.html"

    },


    {

        id: "atualizacoes",

        nome: "Atualizações",

        titulo: "Atualizações",

        icone: "📰",

        link: "páginas/atualizações/atualizações.html"

    }


];

// =======================================
// NOVIDADES
// =======================================


const NOVIDADES = {


    curiosidades: true,

    frases: false,

    hall: false,

    atualizacoes: true


};

// =======================================
// UTILIDADES
// =======================================



function paginaAtual() {


    return window.location.pathname;


}

function ativa(link) {


    return paginaAtual().includes(link)

        ? "active"

        : "";


}

function novo(id) {


    return NOVIDADES[id]

        ? '<span class="novo"></span>'

        : "";


}
