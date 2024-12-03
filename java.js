function mostrarSecao(id) {
    const secoes = document.querySelectorAll("section");
  
    secoes.forEach((secao) => {
      secao.style.display = "none";
    });
  
    const secaoAtiva = document.getElementById(id);
    if (secaoAtiva) {
        secaoAtiva.style.display = "block"; // Mostra a seção

        // Aplica estilos específicos se não for a seção principal
        if (id !== "calendario_principal") {
            secaoAtiva.style.display = "flex";
            secaoAtiva.style.flexDirection = "column";
            secaoAtiva.style.alignItems = "center";
            secaoAtiva.style.justifyContent = "center";
        } else {
            // Reseta os estilos adicionais para o calendário
            secaoAtiva.style.flexDirection = "";
            secaoAtiva.style.alignItems = "";
            secaoAtiva.style.justifyContent = "";
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
  mostrarSecao("calendario_principal");
});