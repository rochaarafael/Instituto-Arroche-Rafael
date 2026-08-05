// =======================================
// NAVBAR
// Instituto Arroche, Rafael
// =======================================


function criarNavbar() {



    const links = PAGINAS.map(pagina => `


        <li>


            <a

                href="${caminho(pagina.link)}"

                class="${ativa(pagina.link)}">


                ${pagina.icone} ${pagina.nome}


                ${novo(pagina.id)}


            </a>


        </li>


    `).join("");

    return `


<header>
    <nav class="navbar desktop-nav">
        <a

            href="${caminho("index.html")}"

            class="logo">


            ${CONFIG.emoji} ${CONFIG.instituto}


        </a>

        <ul class="nav-links">


            ${links}


        </ul>

        <div class="theme-area">

            <input

                type="checkbox"

                class="checkbox"

                id="chk">

            <label

                class="label"

                for="chk">
                <img

                    src="${caminho("lua.png")}"

                    class="fa-moon">

                <img

                    src="${caminho("sol.png")}"

                    class="fa-sun">
                <div class="ball"></div>

            </label>

        </div>
    </nav>

    <nav class="navbar mobile-nav">

        <button

            id="menuButton"

            class="menu-button">

            <span></span>

            <span></span>

            <span></span>

        </button>

        <a

            href="${caminho("index.html")}"

            class="logo-mobile">





            ${CONFIG.emoji} ${CONFIG.instituto}

        </a>

    </nav>
</header>

    `;

}

function iniciarNavbar() {

    const header = document.querySelector("header");

    if (!header) return;


    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}

