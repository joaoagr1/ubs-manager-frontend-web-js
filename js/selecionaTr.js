let idEdicao;
let nomeEdicao;
let emailEdicao;
let crmEdicao;

var trClicada = document.querySelector(".tabela");
var tabelaPacientes = document.getElementById("tabela-pacientes");

// Crie um objeto vazio para armazenar os dados de edição
var dadosEdicao = {};

trClicada.addEventListener("click", function(event) {
  // Remove a classe "selecionada" de todas as <tr> em "tabela-pacientes".
  var trs = tabelaPacientes.querySelectorAll("tr");
  trs.forEach(function(tr) {
    tr.classList.remove("selecionada");
  });

  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode;
  paiDoAlvo.classList.add("selecionada");

  // Salvados os dados para enviar para o modal de update
  dadosEdicao.idEdicao = paiDoAlvo.querySelector(".info-id").textContent;
  dadosEdicao.nomeEdicao = paiDoAlvo.querySelector(".info-nome").textContent;
  dadosEdicao.emailEdicao = paiDoAlvo.querySelector(".info-email").textContent;
  dadosEdicao.crmEdicao = paiDoAlvo.querySelector(".info-crm").textContent;

  // Agora você tem os dados de edição no objeto "dadosEdicao"
  console.log(dadosEdicao)
});

