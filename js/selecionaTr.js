
// Variáveis para armazenar os elementos do DOM
var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");



const tabelaPacientes = document.getElementById("tabela-pacientes");
const botaoDetalhes = document.getElementById("botao-detalhes");
const botaoEditar = document.querySelector("#botao-editar");
const botaoExcluir = document.querySelector("#botao-excluir");
const trClicada = document.querySelector(".tabela");

botaoEditar.disabled = true;
botaoExcluir.disabled = true;
botaoDetalhes.disabled = true;

var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");




// Dados de edição em um objeto
const dadosEdicao = {
  idEdicao: null,
  nomeEdicao: null,
  emailEdicao: null,
  crmEdicao: null,
  especialidadeEdicao: null,
};

// Função para atualizar os dados de edição
function atualizarDadosEdicao(paiDoAlvo) {
  dadosEdicao.idEdicao = paiDoAlvo.querySelector(".info-id").textContent;
  dadosEdicao.nomeEdicao = paiDoAlvo.querySelector(".info-nome").textContent;
  dadosEdicao.emailEdicao = paiDoAlvo.querySelector(".info-email").textContent;
  dadosEdicao.crmEdicao = paiDoAlvo.querySelector(".info-crm").textContent;
  dadosEdicao.especialidadeEdicao = paiDoAlvo.querySelector(".info-especialidade").textContent;
}

// Função para tratar o clique em uma <tr>
function trClicadaHandler(event) {
  botaoEditar.disabled = false;
  botaoExcluir.disabled = false;
  botaoDetalhes.disabled = false;

  const trs = tabelaPacientes.querySelectorAll("tr");
  trs.forEach((tr) => {
    tr.classList.remove("selecionada");
  });

  const alvoEvento = event.target;
  const paiDoAlvo = alvoEvento.parentNode;
  paiDoAlvo.classList.add("selecionada");

  atualizarDadosEdicao(paiDoAlvo);
}

// Evento de clique em uma <tr>
trClicada.addEventListener("click", trClicadaHandler);

// Função para tratar o clique fora da tabela
function clicarForaTabelaHandler(event) {
  if (!isTableOrDescendantOfTable(event.target)) {
    botaoEditar.disabled = true;
    botaoExcluir.disabled = true;
    botaoDetalhes.disabled = true;

    const trs = tabelaPacientes.querySelectorAll("tr");
    trs.forEach((tr) => {
      tr.classList.remove("selecionada");
    });
  }
}

// Evento de clique fora da tabela
document.addEventListener("click", clicarForaTabelaHandler);

// Função para verificar se o elemento ou seus ancestrais são tabelas


// Evento de clique no botão Excluir
botaoExcluir.addEventListener("click", () => {
  requisicaoDelete();
});

// Evento de clique no botão Detalhes
botaoDetalhes.addEventListener("click", () => {
  localStorage.setItem("detalheStorage", dadosEdicao.idEdicao);
  window.location.href = "http://127.0.0.1:5503/detalhes.html";
});
