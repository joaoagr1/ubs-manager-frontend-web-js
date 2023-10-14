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








