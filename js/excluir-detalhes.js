var tabelaAlergias = document.querySelector("#tabela-alergias")

tabelaAlergias.addEventListener("dblclick", function (event) {
    alvoEvento = event.target;
    paiDoAlvo = alvoEvento.parentNode;
    var confirmacao = confirm("Tem certeza de que deseja excluir este elemento?");

    console.log(dadosEdicao.idEdicao + "chegou aqui")

    if (confirmacao) {
        console.log(alvoEvento)

    }
});