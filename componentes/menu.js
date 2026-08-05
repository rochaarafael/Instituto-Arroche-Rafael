// =======================================
// MENU MOBILE
// Instituto Arroche, Rafael
// =======================================


function criarMenu() {



    const links = PAGINAS.map(pagina => `


        <a

            href="${caminho(pagina.link)}"

            class="menu-item ${ativa(pagina.link)}">


            ${pagina.icone} ${pagina.titulo}


            ${novo(pagina.id)}


        </a>


    `).join("");





    return `


<div class="menu-overlay" id="menuOverlay">



    <aside class="side-menu">



        <div class="menu-header">



            <button

                id="closeMenuButton"

                class="close-menu-button">


                &times;


            </button>



            <p>

                Pesquisadora Honorária detectada.

            </p>



        </div>






        <div class="menu-item theme-mobile">



            <span>

                🌙 Tema

            </span>




            <div>



                <input

                    type="checkbox"

                    class="checkbox"

                    id="chkMobile">





                <label

                    class="label"

                    for="chkMobile">



                    <img

                        src="${caminho("lua.png")}"

                        class="fa-moon">





                    <img

                        src="${caminho("sol.png")}"

                        class="fa-sun">





                    <div class="ball"></div>




                </label>



            </div>



        </div>







        ${links}







        <div class="menu-footer">


            Versão ${CONFIG.versao}


        </div>





    </aside>
</div>

    `;

}

// =======================================
// INICIALIZAÇÃO DO MENU MOBILE
// =======================================

function iniciarMenu() {


    const menuButton =
        document.getElementById("menuButton");


    const closeButton =
        document.getElementById("closeMenuButton");


    const overlay =
        document.getElementById("menuOverlay");



    if (
        !menuButton ||
        !closeButton ||
        !overlay
    ) return;





    menuButton.addEventListener(
        "click",
        () => {

            overlay.classList.add("active");

        }
    );





    closeButton.addEventListener(
        "click",
        () => {

            overlay.classList.remove("active");

        }
    );





    overlay.addEventListener(
        "click",
        (evento) => {


            if (
                evento.target === overlay
            ) {

                overlay.classList.remove("active");

            }


        }
    );


}