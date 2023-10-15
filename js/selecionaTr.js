let idEdicao;
let nomeEdicao;
let emailEdicao;
let crmEdicao;

var trClicada = document.querySelector(".tabela");
var tabelaPacientes = document.getElementById("tabela-pacientes");


// Crie um objeto vazio para armazenar os dados de edição
var dadosEdicao = {};





botaoEditar = document.querySelector("#botao-editar")
botaoExcluir = document.querySelector("#botao-excluir")


botaoEditar.disabled = true;
botaoExcluir.disabled = true;



trClicada.addEventListener("click", function(event) {
  // Remove a classe "selecionada" de todas as <tr> em "tabela-pacientes".
  botaoEditar.disabled = false;
  botaoExcluir.disabled = false;


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
  dadosEdicao.especialidadeEdicao = paiDoAlvo.querySelector(".info-especialidade").textContent;

  


  // Agora você tem os dados de edição no objeto "dadosEdicao"
 // console.log(dadosEdicao)

console.log( dadosEdicao.idEdicao)

  
});


document.addEventListener('click', function(event) {
  if (!isTableOrDescendantOfTable(event.target)) {
    // Aqui você pode realizar a ação desejada para elementos fora das tabelas

    
    botaoEditar.disabled = true;
    botaoExcluir.disabled = true;



    var trs = tabelaPacientes.querySelectorAll("tr");
  trs.forEach(function(tr) {
    tr.classList.remove("selecionada");
  });
  }
});

// Função para verificar se o elemento ou seus ancestrais são tabelas
function isTableOrDescendantOfTable(element) {
  while (element) {
    if (element.tagName === 'TABLE') {
      return true; // O elemento é uma tabela
    }
    element = element.parentElement; // Verifique o ancestral seguinte
  }
  return false; // Não é uma tabela nem pertence a uma tabela
}











  

