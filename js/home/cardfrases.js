// ======================================================
// CARD - ÚLTIMAS FRASES
// Instituto Arroche, Rafael
// ======================================================

function renderizarCardFrases() {

    const container =
        document.getElementById("card-frases");

    if (!container) return;

    container.innerHTML = "";

    window.frases
        .slice(0, 2)
        .forEach(frase => {

            container.innerHTML += `

                <div class="card">

                    <p>

                        "${frase.texto}"

                        <br><br>

                        — ${frase.autor}

                    </p>

                </div>

            `;

        });

}