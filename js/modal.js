const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
   
    const button = event.relatedTarget
    const recipient = button.getAttribute('data-bs-whatever')
  
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalBodyInput.value = recipient
  })
}

var meuBotao = document.getElementById('botao-editar');
meuBotao.addEventListener('click', function(event) {
  event.preventDefault();
});




const editarModal = document.getElementById('editarModal')
if (editarModal) {
  editarModal.addEventListener('show.bs.modal', event => {
   
    const button = event.relatedTarget
    const recipient = button.getAttribute('data-bs-whatever')
  
    const modalTitle = editarModal.querySelector('.modal-title')
    const modalBodyInput = editarModal.querySelector('.modal-body input')

    modalBodyInput.value = recipient


    
    document.getElementById("nome-editar").value = dadosEdicao.nomeEdicao;
    document.getElementById("email-editar").value = dadosEdicao.emailEdicao;
    document.getElementById("crm-editar").value = dadosEdicao.crmEdicao;
    document.getElementById("especialidade-editar").value = dadosEdicao.especialidadeEdicao;


  })


//document.querySelector("#nome-editar") = dadosEdicao.nomeEdicao 
}



document.querySelector("#confirmar-paciente").addEventListener('click',function(){

var nomeNovo = document.querySelector("#nome-editar").value;
console.log(nomeNovo)

var emailNovo = document.querySelector("#email-editar").value;
console.log(emailNovo)

var crmNovo = document.querySelector("#crm-editar").value;
console.log(crmNovo)

var especialidadeNovo = document.querySelector("#especialidade-editar").value;
console.log(especialidadeNovo)

console.log(dadosEdicao.idEdicao)

// dados para passar no json de atualiar:
// dadosEdicao.idEdicao
// nomeNovo
// emailNovo
// crmNovo
// especialidadeNovo


const url = 'http://localhost:8080/medicos'; // URL do servidor
  const id = 123; // ID a ser enviado no corpo da requisição

  // Dados a serem enviados no corpo da requisição
  const dados = {
    id: dadosEdicao.idEdicao,
    nome: nomeNovo,
    email: emailNovo,
    crm: crmNovo,
    especialidade: especialidadeNovo

  };

  // Opções para a requisição PUT
  const options = {
    method: 'PUT', // Método HTTP PUT
    headers: {
      'Content-Type': 'application/json', // Tipo de conteúdo JSON
    },
    body: JSON.stringify(dados), // Converte os dados para JSON
  };

  // Realize a requisição PUT
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição PUT');
      }
      return response.json(); // Se desejar, você pode analisar a resposta JSON.
    })
    .then(data => {
      console.log('Requisição PUT bem-sucedida:', data);
    })
    .catch(error => {
      console.error('Erro na requisição PUT:', error);
    });
});













