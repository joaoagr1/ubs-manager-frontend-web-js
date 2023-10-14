var trClicada = document.querySelector(".tabela");
var tabelaPacientes = document.getElementById("tabela-pacientes");

trClicada.addEventListener("click", function(event) {
  // Remove a classe "selecionada" de todas as <tr> em "tabela-pacientes".
  var trs = tabelaPacientes.querySelectorAll("tr");
  trs.forEach(function(tr) {
    tr.classList.remove("selecionada");
  });

  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode;
  paiDoAlvo.classList.add("selecionada");
});
