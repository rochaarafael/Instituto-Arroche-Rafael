// ======================================================
// ATUALIZAÇÕES
// Instituto Arroche, Rafael
// ======================================================

function renderizarAtualizacoes() {

    const container =
        document.getElementById("lista-atualizacoes");

    if (!container) return;

    container.innerHTML = "";

    atualizacoes.forEach(atualizacao => {

        const tipoClasse =
            atualizacao.tipo
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

        const icones = {

            novo: "🟢",

            melhoria: "🟡",

            correcao: "🔵",

            removido: "🔴"

        };

        const card =
            document.createElement("article");

        card.className = "card";

        card.innerHTML = `

            <div class="card-atualizacao">

                <div class="card-topo">

                    <span class="versao">

                        ${atualizacao.versao}

                    </span>

                    <span class="data">

                        ${atualizacao.data}

                    </span>

                </div>

                <div class="tipo ${tipoClasse}">

                    ${icones[tipoClasse] ?? "⚪"}

                    ${atualizacao.tipo}

                </div>

                <h3>

                    ${atualizacao.titulo}

                </h3>

                <p>

                    ${atualizacao.descricao}

                </p>

            </div>

        `;

        container.appendChild(card);

    });

}

document.addEventListener("DOMContentLoaded", () => {

    iniciarPagina();

    renderizarAtualizacoes();

});