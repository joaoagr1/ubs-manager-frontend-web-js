var botaoDetalhes = document.getElementById("botao-detalhes");

// Adiciona um ouvinte de evento de clique
botaoDetalhes.addEventListener("click", function() {
    // Redireciona para a página desejada
    window.location.href = "http://127.0.0.1:5503/detalhes.html";
    var nomeDetalhe = document.querySelector("#nome-detalhe");
      //nomeDetalhe.textContent = dadosEdicao.nomeEdicao;
      nomeDetalhe = dadosEdicao.nomeEdicao
      console.log(nomeDetalhe)
});