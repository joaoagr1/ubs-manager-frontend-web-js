var tabelaAlergias = document.querySelector("#tabelaAlergias")
var identificador = localStorage.getItem("detalheStorage");

tabelaAlergias.addEventListener("dblclick", function (event) {
    alvoEvento = event.target;
    paiDoAlvo = alvoEvento.parentNode;
    var confirmacao = confirm("Tem certeza de que deseja excluir este elemento?");

    console.log(dadosEdicao.idEdicao + "chegou aqui")

    if (confirmacao) {
        console.log("O item clicado foi "+alvoEvento.textContent+" e o identificador é "+identificador) 

    }
});

var tabelaMuc = document.querySelector("#tabelaMuc")

tabelaMuc.addEventListener("dblclick", function (event){
    alvoEvento = event.target;
    paiDoAlvo = alvoEvento.parentNode;
    var confirmacao = confirm("Tem certeza que deseja excluir este elemento?")
    console.log(identificador + alvoEvento.textContent)

})