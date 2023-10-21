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
