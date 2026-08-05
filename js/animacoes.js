function iniciarAnimacoes() {


    const elementos =
        document.querySelectorAll(
            ".fade-in-element"
        );


    if (!elementos.length) return;



    function iniciar() {


        elementos.forEach((elemento,index)=>{


            setTimeout(()=>{


                elemento.classList.add(
                    "show"
                );


            }, index * 250);


        });


    }



    document.addEventListener(
        "loadingFinalizado",
        iniciar
    );



    // caso já tenha carregado antes

   if (
sessionStorage.getItem("loadingVisualizado")
){

    iniciar();

}


}