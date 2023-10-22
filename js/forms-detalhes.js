var botaoAdicionarAlergias = document.querySelector("#botao-alergias");
var input = document.getElementById("campo-texto-alergias");

botaoAdicionarAlergias.addEventListener("click", function() {
    // Obtém o valor do campo input
    console.log(input.value);

    var alergiaAdicionada = input.value;

    var identificador = localStorage.getItem("detalheStorage");

    console.log(identificador)

    const url = `http://localhost:8080/alergias/inserir?identificador=${identificador}&alergias=${alergiaAdicionada}`;
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Outros cabeçalhos, se necessário
  }
  // Você pode adicionar um corpo (body) aqui, se necessário
};

// Realiza a requisição Fetch
fetch(url, requestOptions)
  .then(response => {
    if (response.ok) {
      console.log('Requisição POST bem-sucedida.');
      window.location.reload();

    } else {
      console.error('Erro na requisição POST.');
    }
  })
  .catch(error => {
    console.error('Erro na requisição POST:', error);
  });
});





var botaoAdicionarMuc = document.querySelector("#botao-muc");
var input = document.getElementById("campo-texto-muc");

botaoAdicionarMuc.addEventListener("click", function() {
    // Obtém o valor do campo input
    console.log(input.value);

    var mucAdicionada = input.value;

    var identificador = localStorage.getItem("detalheStorage");

    console.log(identificador)


    
    const url = `http://localhost:8080/muc/inserir?identificador=${identificador}&muc=${mucAdicionada}`;
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Outros cabeçalhos, se necessário
  }
  // Você pode adicionar um corpo (body) aqui, se necessário
};

// Realiza a requisição Fetch
fetch(url, requestOptions)
  .then(response => {
    if (response.ok) {
      console.log('Requisição POST bem-sucedida.');
      window.location.reload();

    } else {
      console.error('Erro na requisição POST.');
    }
  })
  .catch(error => {
    console.error('Erro na requisição POST:', error);
  });
});








var botaoExcluirDetalhe = document.querySelector("#botao-excluir-detalhe")

botaoExcluirDetalhe.addEventListener("click", function() {
    // Coloque aqui o código a ser executado quando o botão for clicado

    var identificador = localStorage.getItem("detalheStorage");


    var confirmaExclusao = window.confirm("Você tem certeza de que deseja continuar?");
    if (confirmaExclusao) {

      fetch(`http://localhost:8080/medicos/${identificador}`, {
  method: 'DELETE',
  headers: {
      'Content-Type': 'application/json'
      // Outros cabeçalhos, se necessário
  },
})
.then(response => {
  if (response.ok) {
      console.log(`O médico com ID ${identificador} foi excluído com sucesso.`);
      window.location.href = "http://127.0.0.1:5503/index.html";

  } else {
      console.error(`Falha ao excluir o médico com ID ${identificador}.`);
  }
})
.catch(error => {
  console.error('Ocorreu um erro durante a exclusão:', error);
});
          


    




      console.log(dadosEdicao.idEdicao + "excluido")

      
    }

});

botaoAdicionarAlergias.disabled = true


var campoTextoAlergias = document.getElementById("campo-texto-alergias");
 botaoAdicionarAlergias = document.getElementById("botao-alergias");

// Adiciona um ouvinte de evento para o evento "input" no campo de entrada
campoTextoAlergias.addEventListener("input", function() {
  // Verifica se o campo de entrada não está vazio
  if (campoTextoAlergias.value.trim() !== "") {
    botaoAdicionarAlergias.removeAttribute("disabled"); // Habilita o botão
  } else {
    botaoAdicionarAlergias.setAttribute("disabled", "disabled"); // Desabilita o botão
  }
});

