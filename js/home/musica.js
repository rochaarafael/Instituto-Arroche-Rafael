// ======================================================
// MÚSICA DEDICADA
// Instituto Arroche, Rafael
// ======================================================

function renderizarMusica() {

    const container =
        document.getElementById("musica-dedicada");

    if (!container || !window.musica) return;

    container.innerHTML = `

        <article class="spotify-card">

            <img
                class="spotify-capa"
                src="páginas/musica/${musica.capa}"
                alt="${musica.album}"
            >

            <div class="spotify-info">

                <span class="spotify-label">

                    Música dedicada

                </span>

                <h3>

                    ${musica.titulo}

                </h3>

                <p class="spotify-artista">

                    ${musica.artista}

                </p>

                <p class="spotify-mensagem">

                    "${musica.mensagem}"

                </p>

                <a
                    href="${musica.spotify}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="spotify-botao"
                >

                    🎵 Ouvir no Spotify

                </a>

                <small>

                    Dedicada desde ${musica.data}

                </small>

            </div>

        </article>

    `;

}