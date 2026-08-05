// ======================================================
// SISTEMA DE TEMA
// Instituto Arroche, Rafael
// Controle Dark / Light Mode
// ======================================================

function iniciarTema() {

    const chk = document.getElementById("chk");
    const chkMobile = document.getElementById("chkMobile");


    // ======================================
    // CARREGA TEMA SALVO
    // ======================================

    const temaAtual = localStorage.getItem("theme");


    if (temaAtual === "dark") {

        aplicarTema(true);

        if (chk) chk.checked = true;

        if (chkMobile) chkMobile.checked = true;

    }



    // ======================================
    // DESKTOP
    // ======================================

    if (chk) {

        chk.addEventListener("change", () => {

            aplicarTema(chk.checked);


            if (chkMobile) {

                chkMobile.checked = chk.checked;

            }

        });

    }



    // ======================================
    // MOBILE
    // ======================================

    if (chkMobile) {

        chkMobile.addEventListener("change", () => {


            aplicarTema(chkMobile.checked);


            if (chk) {

                chk.checked = chkMobile.checked;

            }


        });

    }

}



// ======================================================
// APLICA TEMA
// ======================================================

function aplicarTema(escuro) {


    document.documentElement.classList.toggle(
        "dark",
        escuro
    );


    document.body.classList.toggle(
        "dark",
        escuro
    );


    localStorage.setItem(
        "theme",
        escuro ? "dark" : "light"
    );


}