// ======================================================
// OBRAS
// Instituto Arroche, Rafael
// ======================================================

// ======================================================
// RENDERIZAÇÃO
// ======================================================

function renderizarObras() {

    const container =
        document.getElementById("lista-obras");

    if (!container) return;

    container.innerHTML = "";

    let assistidas = 0;

    obras.forEach(obra => {

        if (obra.assistido) {

            assistidas++;

        }

        const card =
            document.createElement("article");

        card.className = "card";

        card.innerHTML = `

            <img
                class="obra-capa"
                src="${obra.capa}"
                alt="${obra.titulo}"
            >

            <div class="obra-conteudo">

                <h3>

                    ${obra.titulo}

                </h3>

                <p class="obra-genero">

                    ${obra.genero}

                </p>

                <div class="obra-status">

                    ${
                        obra.assistido

                        ?

                        `
                        <span class="status assistido">

                            ✅ Assistido

                        </span>

                        <small>

                            📅 ${obra.data}

                        </small>

                        <small>

                            ${obra.modalidade === "Presencial"

                                ? "🫂 Presencial"

                                : "💻 Online"}

                        </small>
                        `

                        :

                        `
                        <span class="status pendente">

                            ⏳ Ainda não assistido

                        </span>
                        `
                    }

                </div>

            </div>

        `;

        container.appendChild(card);

    });

    document.getElementById("total-obras").textContent =
        obras.length;

    document.getElementById("obras-assistidas").textContent =
        assistidas;

    document.getElementById("obras-pendentes").textContent =
        obras.length - assistidas;

}

// ======================================================
// INICIALIZAÇÃO
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    iniciarPagina();

    renderizarObras();

});