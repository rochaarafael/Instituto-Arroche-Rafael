function criarCardCuriosidade(curiosidade) {

    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `

        <div class="card-frase-interna">
            <h3>${curiosidade.numero}</h3>

            <p class="frase-texto">${curiosidade.texto}</p>

            ${
                curiosidade.imagem
                ?
                `
                <img 
                    src="${curiosidade.imagem}"
                    alt="${curiosidade.alt}"
                    class="image"
                >
                `
                :
                ""
            }
        </div>

    `;

    return card;

}



function criarCardFrase(frase) {

    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `

        <div class="card-frase-interna">

            <p class="frase-texto">
                "${frase.texto}"
            </p>

            <div class="frase-autor">
                — ${frase.autor}
            </div>

            <div class="frase-data">
                ${frase.data}
            </div>

        </div>

    `;

    return card;
}