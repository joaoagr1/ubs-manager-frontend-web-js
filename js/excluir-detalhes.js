var tabelaAlergias = document.querySelector("#tabelaAlergias")
var identificador = localStorage.getItem("detalheStorage");

tabelaAlergias.addEventListener("dblclick", function (event) {
    alvoEvento = event.target;
    paiDoAlvo = alvoEvento.parentNode;
    var confirmacao = confirm("Tem certeza de que deseja excluir este elemento?");

    console.log(dadosEdicao.idEdicao + "chegou aqui")

    if (confirmacao) {
        console.log("O item clicado foi "+alvoEvento.textContent+" e o identificador é "+identificador)
        
        const url = `http://localhost:8080/alergias?identificador=${identificador}&alergias=${alvoEvento.textContent}`;


        fetch(url, {
            method: 'DELETE',
          })
            .then(response => {
              if (response.ok) {
                console.log('Requisição DELETE bem-sucedida');
                location.reload(); 
              } else {
                console.error('Erro na requisição DELETE');
              }
            })
            .catch(error => {
              console.error('Erro ao realizar a requisição DELETE:', error);
            });

    }
});

var tabelaMuc = document.querySelector("#tabelaMuc")

tabelaMuc.addEventListener("dblclick", function (event){
    alvoEvento = event.target;
    paiDoAlvo = alvoEvento.parentNode;
    var confirmacao = confirm("Tem certeza que deseja excluir este elemento?")
    console.log(identificador + alvoEvento.textContent)



    if (confirmacao) {
        console.log("O item clicado foi "+alvoEvento.textContent+" e o identificador é "+identificador)
        
        const url =`http://localhost:8080/muc?identificador=${identificador}&muc=${alvoEvento.textContent}`;


        fetch(url, {
            method: 'DELETE',
          })
            .then(response => {
              if (response.ok) {
                console.log('Requisição DELETE bem-sucedida');
                location.reload(); 
              } else {
                console.error('Erro na requisição DELETE');
              }
            })
            .catch(error => {
              console.error('Erro ao realizar a requisição DELETE:', error);
            });
        }
})