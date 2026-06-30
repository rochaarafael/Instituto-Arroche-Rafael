// Força o navegador a sempre resetar o scroll para o topo ao carregar/recarregar a página
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// ===============================
// TEMA CLARO / ESCURO
// ===============================

const chk = document.getElementById("chk");
const chkMobile = document.getElementById("chkMobile");
const header = document.querySelector("header");

// Aplica tema salvo
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.documentElement.classList.add("dark");

    if (chk) chk.checked = true;
    if (chkMobile) chkMobile.checked = true;
}

// Toggle tema
function toggleTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

if (chk) {
    chk.addEventListener("change", () => {
        toggleTheme(chk.checked);
        if (chkMobile) chkMobile.checked = chk.checked;
    });
}

if (chkMobile) {
    chkMobile.addEventListener("change", () => {
        toggleTheme(chkMobile.checked);
        if (chk) chk.checked = chkMobile.checked;
    });
}



// ===============================
// NAVBAR + MENU MOBILE
// ===============================

const menuButton = document.getElementById("menuButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const menuOverlay = document.getElementById("menuOverlay");

function abrirMenu() {
    menuOverlay.classList.add("open");
    menuButton.classList.add("open");
    // O header permanece visível por baixo do overlay sem sofrer alterações de display
}

function fecharMenu() {
    menuOverlay.classList.remove("open");
    menuButton.classList.remove("open");
}

// Abrir menu nas três barras
if (menuButton) {
    menuButton.addEventListener("click", () => {
        if (menuOverlay.classList.contains("open")) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });
}

// Fechar menu no botão X
if (closeMenuButton) {
    closeMenuButton.addEventListener("click", fecharMenu);
}

// Fechar clicando exatamente no fundo escuro do overlay
if (menuOverlay) {
    menuOverlay.addEventListener("click", (e) => {
        if (e.target === menuOverlay) {
            fecharMenu();
        }
    });
}

// Fechar ao clicar em um link comum, mas NÃO quando alternar o tema
document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", (e) => {
        if (item.classList.contains("theme-mobile") || e.target.closest(".theme-mobile")) {
            return; 
        }
        fecharMenu();
    });
});


// ===============================
// SCROLL HEADER FIXO (STICKY NAVBAR)
// ===============================

window.addEventListener("scroll", () => {
    // Quando passar de 80px de scroll, adiciona a classe que fixa no topo
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ===============================
// INICIAR LOADING
// ===============================

executarEtapa();