let idEdicao;
let nomeEdicao;
let emailEdicao;
let crmEdicao;

var trClicada = document.querySelector(".tabela");
var tabelaPacientes = document.getElementById("tabela-pacientes");


// Crie um objeto vazio para armazenar os dados de edição
let dadosEdicao = {};





botaoEditar = document.querySelector("#botao-editar")
botaoExcluir = document.querySelector("#botao-excluir")


botaoEditar.disabled = true;
botaoExcluir.disabled = true;
botaoDetalhes.disabled = true;



trClicada.addEventListener("click", function(event) {
  // Remove a classe "selecionada" de todas as <tr> em "tabela-pacientes".
  botaoEditar.disabled = false;
  botaoExcluir.disabled = false;
  botaoDetalhes.disabled = false


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




  //jogar aqui para a pagina de perfil/detalhes

      var nomeDetalhe = document.querySelector("#nome-detalhe");
      //nomeDetalhe.textContent = dadosEdicao.nomeEdicao;
      nomeDetalhe = dadosEdicao.nomeEdicao


  // Agora você tem os dados de edição no objeto "dadosEdicao"
  console.log(dadosEdicao.nomeEdicao)
  console.log(dadosEdicao)
  console.log( dadosEdicao.idEdicao)

  
  localStorage.setItem("detalheStorage", dadosEdicao);

});


document.addEventListener('click', function(event) {
  if (!isTableOrDescendantOfTable(event.target)) {
    // Aqui você pode realizar a ação desejada para elementos fora das tabelas

    
    botaoEditar.disabled = true;
    botaoExcluir.disabled = true;
    botaoDetalhes.disabled = true



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




tr = document.querySelector("tr")
tr.addEventListener("mouseover", function() {
  // Quando o mouse passa por cima, você pode adicionar qualquer ação desejada aqui
  // Por exemplo, muda a cor de fundo
});




  

//var nomeDetalhe = document.querySelector("#nome-detalhe");
      //nomeDetalhe.textContent = dadosEdicao.nomeEdicao;
     // nomeDetalhe = dadosEdicao.nomeEdicao




     botaoExcluir.addEventListener("click", function() {
      // Coloque aqui o código a ser executado quando o botão for clicado

      var confirmaExclusao = window.confirm("Você tem certeza de que deseja continuar?");
      if (confirmaExclusao) {

        fetch(`http://localhost:8080/medicos/${dadosEdicao.idEdicao}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
        // Outros cabeçalhos, se necessário
    },
})
.then(response => {
    if (response.ok) {
        console.log(`O médico com ID ${dadosEdicao.idEdicao} foi excluído com sucesso.`);
        location.reload();
    } else {
        console.error(`Falha ao excluir o médico com ID ${dadosEdicao.idEdicao}.`);
    }
})
.catch(error => {
    console.error('Ocorreu um erro durante a exclusão:', error);
});
            


      

  


        console.log(dadosEdicao.idEdicao + "excluido")

        
      }

  });


    //  var alvoEvento = event.target;
    //  var paiDoAlvo = alvoEvento.parentNode;

    //  dadosEdicao.idEdicao = paiDoAlvo.querySelector(".info-id").textContent;



    var botaoDetalhes = document.getElementById("botao-detalhes");

// Adiciona um ouvinte de evento de clique
var botaoDetalhes = document.getElementById("botao-detalhes");

botaoDetalhes.addEventListener("click", function() {
  // Armazena os dados no localStorage antes do redirecionamento
  localStorage.setItem("detalheStorage", dadosEdicao.idEdicao);

  // Redireciona para a página desejada
  window.location.href = "http://127.0.0.1:5503/detalhes.html";
});

// Fora do manipulador de eventos de clique
// Agora a chamada para a API fetch está fora do evento de clique
fetch(`http://localhost:8080/medicos/${dadosEdicao.idEdicao}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json', // Defina os cabeçalhos apropriados, se necessário
    // Outros cabeçalhos, se necessário
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados.');
    }
    return response.text(); // Se a resposta for JSON
    // Se a resposta não for JSON, use response.text() ou response.blob(), dependendo do tipo de resposta.
  })
  .then(data => {
    // Faça algo com os dados recebidos, por exemplo, exiba no console
    console.log(data);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });

