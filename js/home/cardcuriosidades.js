// ======================================================
// CARD - ÚLTIMAS CURIOSIDADES
// Instituto Arroche, Rafael
// ======================================================

function renderizarCardCuriosidades() {

    const container =
        document.getElementById("card-curiosidades");

    if (!container) return;

    container.innerHTML = "";

    window.curiosidades
        .slice(0, 2)
        .forEach(curiosidade => {

            container.innerHTML += `

                <div class="card">

                    <h3>${curiosidade.numero}</h3>

                    <p>${curiosidade.texto}</p>

                </div>

            `;

        });

}